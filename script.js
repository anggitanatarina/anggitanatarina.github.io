// script.js
function toggleMenu() {
    var menu = document.querySelector('.nav-links');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
