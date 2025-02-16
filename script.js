// script.js
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 20; i++) { // Membatasi jumlah bintang
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = (Math.random() * 5 + 3) + 's';
        starsContainer.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', createStars);
