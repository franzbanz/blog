document.addEventListener("DOMContentLoaded", function () {
  (function () {
    function getTodayISO() {
      const d = new Date();
      const dd = String(d.getDate()).padStart(2, '0');
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const yyyy = d.getFullYear();
      return `${dd}.${mm}.${yyyy}`;
    }

    const rawXml = localStorage.getItem("mySchedule");
    const list = document.getElementById("schedule_list");
    const prevBtn = document.getElementById("schedule_prev_btn");
    const nextBtn = document.getElementById("schedule_next_btn");

    console.log("Loaded XML:", rawXml);

    if (!list || !rawXml) {
      if (list) {
        list.innerHTML = '<li class="list_item"><a style="background-color: var(--purple) !important;">Kein Stundenplan im Local Storage</a></li>';
      }
      if (prevBtn) prevBtn.disabled = true;
      if (nextBtn) nextBtn.disabled = true;
      return;
    }

    const cleanedXml = rawXml.replace(/<\?xml.*?\?>/, '').trim();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(cleanedXml, "application/xml");
    const rows = Array.from(xmlDoc.querySelectorAll("ROW"));

    // Group entries by date
    const grouped = {};
    rows.forEach(row => {
      const datum = row.querySelector("DATUM")?.textContent ?? "";
      if (!grouped[datum]) grouped[datum] = [];
      grouped[datum].push(row);
    });

    const dates = Object.keys(grouped).sort((a, b) => {
      const toDate = d => new Date(d.split(".").reverse().join("-"));
      return toDate(a) - toDate(b);
    });

    console.log("Dates:", dates);
    console.log("Grouped:", grouped);

    let currentIndex = dates.findIndex(d => d === getTodayISO());
    if (currentIndex === -1) currentIndex = 0;

    function updateScheduleDisplay() {
      const currentDate = dates[currentIndex];
      const entries = grouped[currentDate];

      list.innerHTML = "";

      updateScheduleHeading(currentDate);

      if (!entries || entries.length === 0) {
        list.innerHTML = `<li class="list_item">Keine Einträge für ${currentDate}.</li>`;
        return;
      }

      entries.forEach(row => {
        const datum = row.querySelector("DATUM")?.textContent ?? "";
        const von = row.querySelector("VON")?.textContent ?? "";
        const bis = row.querySelector("BIS")?.textContent ?? "";
        const titel = row.querySelector("TITEL")?.textContent ?? "";
        const ortRaw = row.querySelector("ORT")?.textContent ?? "";
        const ort = ortRaw.replace(/\s*\(.*?\)\s*$/, "");


        const li = document.createElement("li");
        li.className = "list_item";

        li.innerHTML = `
          <a style="background-color: var(--purple) !important;">
            <table class="list_table">
              <tr>
                <td class="list_date">${von} &hyphen; ${bis}</td>
                <td class="list_type">${titel}<br><span>${ort}</span></td>
              </tr>
            </table>
          </a>
        `;

        list.appendChild(li);
      });

      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === dates.length - 1;
    }

    prevBtn?.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateScheduleDisplay();
      }
    });

    nextBtn?.addEventListener("click", () => {
      if (currentIndex < dates.length - 1) {
        currentIndex++;
        updateScheduleDisplay();
      }
    });

    updateScheduleDisplay();
  })();
});

function updateScheduleHeading(displayedDateStr) {
    const heading = document.getElementById("schedule_heading");
    const today = new Date();
    
    // Parse displayed date from string (e.g., "06.08.2025")
    const [day, month, year] = displayedDateStr.split(".").map(Number);
    const displayedDate = new Date(year, month - 1, day); // JS months are 0-indexed

    // Compare with today
    const isToday =
        today.getDate() === displayedDate.getDate() &&
        today.getMonth() === displayedDate.getMonth() &&
        today.getFullYear() === displayedDate.getFullYear();

    heading.textContent = isToday ? "Stundenplan heute" : `Stundenplan ${displayedDateStr}`;
}
