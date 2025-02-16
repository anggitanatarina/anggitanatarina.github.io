document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});
