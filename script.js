document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.querySelector('.stars');
    const numStars = window.innerWidth < 768 ? 15 : 30;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = (Math.random() * 5 + 3) + 's';
        starsContainer.appendChild(star);
    }
});
