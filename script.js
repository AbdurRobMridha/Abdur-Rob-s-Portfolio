// Smooth scroll handled by CSS scroll-behavior: smooth in body

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Contact form submit handler (optional: just alert)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});
