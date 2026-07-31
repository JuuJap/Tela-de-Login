const body = document.body;
const icon = document.querySelector(".icon");

function updateIcon() {
    if (icon) {
        icon.textContent = body.classList.contains("dark-theme") ? "☀️" : "🌙";
    }
}

function toggleTheme() {
    body.classList.toggle("dark-theme");
    localStorage.setItem(
        "theme",
        body.classList.contains("dark-theme") ? "dark" : "light"
    );

    updateIcon();
    icon?.classList.add("rotate");
    setTimeout(() => icon?.classList.remove("rotate"), 300);
}

function toggleMenu() {
    document.querySelector(".header nav")?.classList.toggle("active");
    document.querySelector(".menu-toggle")?.classList.toggle("active");
}

body.classList.toggle("dark-theme", localStorage.getItem("theme") === "dark");
updateIcon();
