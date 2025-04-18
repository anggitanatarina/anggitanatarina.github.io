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
  const subContents = document.querySelectorAll('.sub-content');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Ambil target dari data-target
      const target = link.getAttribute('data-target');

      // Sembunyikan semua section
      sections.forEach(section => section.classList.remove('active'));

      // Tampilkan section yang dipilih
      const targetSection = document.getElementById(target);
      if (targetSection) {
        targetSection.classList.add('active');

        // Reset iframe di bagian about
        if (target === 'about') {
          const iframes = targetSection.querySelectorAll('iframe');
          iframes.forEach(iframe => {
            const src = iframe.getAttribute('src');
            iframe.setAttribute('src', src);
          });
        }
      }

      // Sembunyikan semua sub-content ketika navigasi berubah
      subContents.forEach(content => content.classList.remove('active'));
    });
  });

  // Tombol sub-menu di "homework"
  const subButtons = document.querySelectorAll('.sub-btn');
  subButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-sub');
      const content = document.getElementById(targetId);

      if (content) {
        // Toggle aktif untuk sub konten
        content.classList.toggle('active');
      }

      // Sembunyikan sub-content lain
      subContents.forEach(otherContent => {
        if (otherContent.id !== targetId) {
          otherContent.classList.remove('active');
        }
      });
    });
  });
});
