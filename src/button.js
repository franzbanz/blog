document.addEventListener("DOMContentLoaded", function () {
    const sectionsPerPage = 2;
    const sections = Array.from(document.querySelectorAll(".course_section"));
    const totalPages = Math.ceil(sections.length / sectionsPerPage);
    let currentPage = 1;

    const prevBtn = document.getElementById("prev_btn");
    const nextBtn = document.getElementById("next_btn");
    // const pageIndicator = document.getElementById("page_indicator");

    function updateSections() {
        sections.forEach((section, index) => {
            const start = (currentPage - 1) * sectionsPerPage;
            const end = start + sectionsPerPage;
            section.style.display = index >= start && index < end ? "block" : "none";
        });

        // pageIndicator.textContent = `Page ${currentPage}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }

    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            updateSections();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateSections();
        }
    });

    updateSections(); // Initial display
});