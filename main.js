// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for scroll animations
const faders = document.querySelectorAll('.appear');
const fadeOptions = {
  threshold: 0.15, // trigger when 15% visible
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');
    observer.unobserve(entry.target); // only animate once
  });
}, fadeOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Add scroll effect to navbar to make it more glassmorphic when scrolling
const nav = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(15, 23, 42, 0.8)';
    nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.background = 'rgba(30, 41, 59, 0.6)';
    nav.style.boxShadow = 'none';
  }
});
