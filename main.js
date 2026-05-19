// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const el = document.querySelector(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Scroll animations
const appearEls = document.querySelectorAll('.appear');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    obs.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

appearEls.forEach(el => observer.observe(el));

// Navbar scroll effect (light theme)
const nav = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
    nav.style.background = 'rgba(73, 69, 62, 0.97)';
  } else {
    nav.style.boxShadow = 'none';
    nav.style.background = 'rgba(250, 248, 244, 0.92)';
  }
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--teal)';
    }
  });
});

// ===== SHOWCASE CAROUSEL =====
document.querySelectorAll('.sc-carousel').forEach(sc => {
  const track = sc.querySelector('.sc-track');
  const imgs = sc.querySelectorAll('.sc-img');
  const prevBtn = sc.querySelector('.sc-prev');
  const nextBtn = sc.querySelector('.sc-next');
  const dots = sc.querySelectorAll('.sc-dot');
  const total = imgs.length;
  let idx = 0;

  function goTo(n) {
    idx = (n + total) % total;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  prevBtn.addEventListener('click', () => goTo(idx - 1));
  nextBtn.addEventListener('click', () => goTo(idx + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  // Swipe support
  let startX = 0;
  sc.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  sc.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? idx + 1 : idx - 1);
  }, { passive: true });

  // Auto-advance every 5s, pause on hover
  let timer = setInterval(() => goTo(idx + 1), 5000);
  const visual = sc.closest('.showcase-visuals');
  if (visual) {
    visual.addEventListener('mouseenter', () => clearInterval(timer));
    visual.addEventListener('mouseleave', () => {
      timer = setInterval(() => goTo(idx + 1), 5000);
    });
  }
});
