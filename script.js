document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Remove 'active' class from all links
        document.querySelectorAll("nav a").forEach(navLink => {
            navLink.classList.remove("active");
        });

        // Add 'active' class to the clicked link
        this.classList.add("active");

        // Hide all sections
        document.querySelectorAll("main section").forEach(section => {
            section.classList.add("hidden");
        });

        // Show the selected section
        const targetId = this.getAttribute("href").substring(1); // Get ID from href
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove("hidden");
        }
    });
});
// Default: Show 'home' section and set 'home' link as active on load
document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById("home");
    const homeLink = document.querySelector("nav a[href='#home']");

    if (homeSection) {
        homeSection.classList.remove("hidden");
    }
    if (homeLink) {
        homeLink.classList.add("active");
    }
});