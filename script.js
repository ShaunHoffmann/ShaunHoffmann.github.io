// ---- Rotating role text (hero) ----
const roles = ['Robotics Researcher', 'NASA Intern', 'Full-Stack Developer'];
const roleEl = document.getElementById('roleText');
let roleIndex = 0;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (roleEl && !prefersReducedMotion) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.style.opacity = 0;
    setTimeout(() => {
      roleEl.textContent = roles[roleIndex];
      roleEl.style.opacity = 1;
    }, 250);
  }, 2600);
  roleEl.style.transition = 'opacity 0.25s ease';
}

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

// ---- Nav background on scroll ----
const siteNav = document.getElementById('site-nav');
window.addEventListener('scroll', () => {
  siteNav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ---- Active section highlighting ----
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[data-section]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.dataset.section === id);
      });
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });

sections.forEach(section => observer.observe(section));