function createStars() {
  const starsContainer = document.querySelector('.stars');
  for (let i = 0; i < 30; i++) {
    let star = document.createElement('div');
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
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('data-target');

      // Set aktif menu
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // Tampilkan section sesuai target
      sections.forEach(section => section.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    });
  });
});
