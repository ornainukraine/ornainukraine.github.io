// js_scripts/scroll-to-top.js

// Коли сторінка прокручується, перевіряємо положення
window.addEventListener('scroll', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 100) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

// Клік на кнопку прокрутить вгору
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
