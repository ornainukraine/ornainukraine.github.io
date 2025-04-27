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

    // визначити, чи дозволено свайпати в даному напрямку
    const allowed = isSwipeAllowed(deltaX);
    if (!allowed) {
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
    const pages = [
      '/index.html',
      '/pages/guides.html',
      '/pages/contacts.html',
      '/pages/faq.html'
    ];

    const currentPath = window.location.pathname;
    const index = pages.findIndex(page => currentPath.endsWith(page));
    if (index === -1) return;

    let targetPage = null;

    if (deltaX < 0 && index < pages.length - 1) {
      // свайп вліво
      targetPage = pages[index + 1];
    } else if (deltaX > 0 && index > 0) {
      // свайп вправо
      targetPage = pages[index - 1];
    }

    if (targetPage) {
      window.location.href = targetPage;
    }
  }

  function isSwipeAllowed(deltaX) {
    const pages = [
      '/index.html',
      '/pages/guides.html',
      '/pages/contacts.html',
      '/pages/faq.html'
    ];

    const currentPath = window.location.pathname;
    const index = pages.findIndex(page => currentPath.endsWith(page));
    if (index === -1) return false;

    if (deltaX > 0 && index === 0) {
      // спроба свайпу вправо на першій сторінці — заборонено
      return false;
    }

    if (deltaX < 0 && index === pages.length - 1) {
      // спроба свайпу вліво на останній сторінці — заборонено
      return false;
    }

    return true;
  }
})();

