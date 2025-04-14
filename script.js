function createStars() {
  const starsContainer = document.querySelector('.stars');
  for (let i = 0; i < 20; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = -Math.random() * 100 + 'px';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    star.style.animationDelay = Math.random() * 2 + 's';
    starsContainer.appendChild(star);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createStars();

  const navLinks = document.querySelectorAll('.nav-text');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');

      sections.forEach(section => section.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    });
  });
});
