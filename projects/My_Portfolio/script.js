// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form validation 
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  e.stopPropagation();

  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }
  form.reset();
  form.classList.remove('was-validated');
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));

// Scroll reveal animation for elements marked .reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => revealObserver.observe(el));

// Stagger project cards slightly for a nicer cascade effect
document.querySelectorAll('#projects .reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 0.08}s`;
});
