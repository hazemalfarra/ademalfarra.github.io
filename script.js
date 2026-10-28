const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav a');

toggle?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.section-pad:not(.hero), .project-card, .principle, .tool-pill').forEach((element) => {
  element.classList.add('scroll-reveal');
  revealObserver.observe(element);
});
