// Mobile Navbar Toggler
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler) {
      navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
      });
    }
  
    // Smooth Scrolling for Links
    const scrollLinks = document.querySelectorAll('.nav-link');
    scrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      });
    });
  });
  
  // Scroll to top button functionality
  document.addEventListener('scroll', function () {
    const scrollTopButton = document.querySelector('.scroll-to-top');
    
    if (window.scrollY > 300) {
      scrollTopButton.classList.add('visible');
    } else {
      scrollTopButton.classList.remove('visible');
    }
  });
  
  document.querySelector('.scroll-to-top').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  