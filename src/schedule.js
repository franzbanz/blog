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

    const today = new Date();
    const toDate = d => new Date(d.split(".").reverse().join("-"));

    let currentIndex = dates.findIndex(dateStr => {
      const dateObj = toDate(dateStr);
      return (
        dateObj.getDate() === today.getDate() &&
        dateObj.getMonth() === today.getMonth() &&
        dateObj.getFullYear() === today.getFullYear()
      );
    });

    // if no entry exactly for today - fall back to the first date after today
    if (currentIndex === -1) {
      currentIndex = dates.findIndex(dateStr => toDate(dateStr) > today);
      if (currentIndex === -1) currentIndex = dates.length - 1;
    }

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
                <td class="list_type">${titel}<br><span style="color: var(--black_light)">${ort}</span></td>
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

  const [day, month, year] = displayedDateStr.split(".").map(Number);
  const displayedDate = new Date(year, month - 1, day);

  const isToday =
    today.getDate() === displayedDate.getDate() &&
    today.getMonth() === displayedDate.getMonth() &&
    today.getFullYear() === displayedDate.getFullYear();

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const isYesterday =
    yesterday.getDate() === displayedDate.getDate() &&
    yesterday.getMonth() === displayedDate.getMonth() &&
    yesterday.getFullYear() === displayedDate.getFullYear();

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const isTomorrow =
    tomorrow.getDate() === displayedDate.getDate() &&
    tomorrow.getMonth() === displayedDate.getMonth() &&
    tomorrow.getFullYear() === displayedDate.getFullYear();

  if (isToday) {
    heading.textContent = "Stundenplan heute";
  } else if (isTomorrow) {
    heading.textContent = "Stundenplan morgen";
  } else if (isYesterday) {
    heading.textContent = "Stundenplan gestern";
  } else {
    heading.textContent = `Stundenplan ${displayedDateStr}`;
  }
}
