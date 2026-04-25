'use strict';

// ── Sticky nav ─────────────────────────────────────────────────────────────
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Mobile menu ────────────────────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  const open = navToggle.classList.toggle('open');
  navMobile.classList.toggle('open', open);
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

// Close mobile menu when a link is tapped
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-label', 'Open menu');
  });
});

// ── Reveal on scroll ───────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      // Stagger siblings in the same parent
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Smooth scroll for hash links ───────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72; // nav height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ── Active nav link highlight ──────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--text)'
          : '';
      });
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));
