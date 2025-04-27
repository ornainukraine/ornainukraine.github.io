console.log('Swipe script loaded!');

// js_scripts/swipe-navigation-advanced.js

(function() {
  let startX = null;
  const threshold = 50; // мінімальна дистанція свайпу в пікселях

  document.addEventListener('touchstart', function(event) {
    if (event.touches.length === 1) {
      startX = event.touches[0].clientX;
    }
  }, { passive: true });

  document.addEventListener('touchend', function(event) {
    if (startX === null) return;

    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - startX;

    // захист від випадкових дотиків
    if (Math.abs(deltaX) < threshold) {
      startX = null;
      return;
    }

    // плавне затемнення перед переходом
    const transition = document.getElementById('page-transition');
    if (transition) {
      transition.style.opacity = '1';
    }

    setTimeout(() => {
      navigatePage(deltaX);
    }, 300); // трохи часу для анімації

    startX = null;
  }, { passive: true });

  function navigatePage(deltaX) {
    const path = window.location.pathname;
    const isRoot = path === '/' || path.endsWith('/index.html');

    const pages = [
      'index.html',
      'pages/guides.html',
      'pages/contacts.html',
      'pages/faq.html'
    ];

    let currentPage = path.split('/').pop();
    if (!currentPage || currentPage === '') currentPage = 'index.html';

    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex === -1) return;

    let targetPage = null;

    if (deltaX < 0 && currentIndex < pages.length - 1) {
      // свайп вліво
      targetPage = pages[currentIndex + 1];
    } else if (deltaX > 0 && currentIndex > 0) {
      // свайп вправо
      targetPage = pages[currentIndex - 1];
    }

    if (targetPage) {
      if (isRoot) {
        window.location.href = targetPage;
      } else {
        window.location.href = '../' + targetPage;
      }
    }
  }
})();
