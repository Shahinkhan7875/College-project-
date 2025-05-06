// Simple fade-in animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animate').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Contact form dummy handler
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thanks for your message! I'll get back to you soon.");
});
