document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("xmlFile");
    const uploadButton = document.getElementById("uploadXmlButton");
    const status = document.getElementById("uploadStatus");
    const browseButton = document.getElementById("browseButton");
    const fileNameDisplay = document.getElementById("fileName");

    browseButton.addEventListener("click", function () {
      fileInput.click();
    });

    fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
        const fullName = fileInput.files[0].name;
        const dotIndex = fullName.lastIndexOf(".");
        const baseName = fullName.substring(0, dotIndex);
        const extension = fullName.substring(dotIndex);

        const shortBase = baseName.length > 8 ? baseName.substring(0, 8) + "…" : baseName;
        fileNameDisplay.textContent = shortBase + extension;
    } else {
        fileNameDisplay.textContent = "Keine Datei";
    }
    });

    uploadButton.addEventListener("click", () => {
        const file = fileInput.files[0];

        if (!file) {
            status.textContent = "Keine Datei";
            return;
        }

        const reader = new FileReader();

        reader.onload = function(event) {
            try {
                let xml = event.target.result;

                xml = xml.replace(/<\?xml[^>]*encoding=["'][^"']+["'][^>]*\?>/, '<?xml version="1.0"?>').trim();

                const parser = new DOMParser();
                const parsed = parser.parseFromString(xml, "application/xml");
                const rows = parsed.querySelectorAll("ROW");

                if (parsed.querySelector("parsererror") || rows.length === 0) {
                    status.textContent = "Ungültige XML-Datei";
                    return;
                }

                localStorage.setItem("mySchedule", xml);
                status.textContent = "Stundenplan gespeichert";
            } catch (error) {
                status.textContent = "Fehler beim Verarbeiten";
                console.error("Parsing error:", error);
            }
        };

        reader.onerror = function() {
            status.textContent = "Fehler beim Lesen der Datei";
        };

        reader.readAsText(file, 'ISO-8859-1');
    });
});

document.getElementById("xmlFile").addEventListener("change", function () {
    const fileName = this.files[0]?.name || "Keine Datei";
    document.getElementById("fileName").textContent = fileName;
});
