// js_scripts/scroll-to-top.js

(function() {
  const scrollBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'flex';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();
