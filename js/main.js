// ===== Navigation Active State =====
document.addEventListener('DOMContentLoaded', function() {
  // Set active navigation link based on current page
  const currentLocation = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add animation to project cards on scroll
  observeProjectCards();
});

// ===== Observe Project Cards for Animation =====
function observeProjectCards() {
  const cards = document.querySelectorAll('.project-card');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }
}

// ===== Mobile Menu Toggle (if needed for smaller screens) =====
function toggleMobileMenu() {
  const nav = document.querySelector('nav ul');
  if (nav.style.display === 'none') {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
}

// ===== Smooth Page Transitions =====
window.addEventListener('load', function() {
  document.body.style.opacity = '1';
});

// ===== Add scroll-to-top functionality for long pages =====
window.addEventListener('scroll', function() {
  const scrollButton = document.getElementById('scrollToTop');
  if (scrollButton) {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
