function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 20; i++) { // Membatasi jumlah bintang
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = -Math.random() * 100 + 'px'; // Mulai dari atas layar
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', createStars);
