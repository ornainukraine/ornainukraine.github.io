// js_scripts/scroll-to-top.js

(function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Перевірка браузера: чи це Microsoft Edge
  function isEdgeBrowser() {
    return navigator.userAgent.includes('Edg');
  }

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      scrollToTopBtn.classList.add('visible');

      // Якщо браузер Edge, додати помаранчевий стиль
      if (isEdgeBrowser()) {
        scrollToTopBtn.classList.add('edge-style');
      } else {
        scrollToTopBtn.classList.remove('edge-style');
      }
    } else {
      scrollToTopBtn.classList.remove('visible');
      scrollToTopBtn.classList.remove('edge-style');
    }
  });

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();
