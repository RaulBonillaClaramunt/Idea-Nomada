// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Language switcher
  const languageSwitcher = document.querySelector('.language-switcher');
  const currentLang = document.documentElement.lang;

  languageSwitcher.addEventListener('click', function(e) {
      if (e.target.tagName === 'BUTTON') {
          const targetLang = e.target.getAttribute('data-lang');
          if (targetLang !== currentLang) {
              // Switch to the other language version
              if (targetLang === 'en') {
                  window.location.href = 'index-en.html';
              } else if (targetLang === 'es') {
                  window.location.href = 'index.html';
              }
          }
      }
  });

  // Navigation to other pages
  document.querySelectorAll('nav a:not([href^="#"])').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const href = this.getAttribute('href');
          window.location.href = href;
      });
  });
});
