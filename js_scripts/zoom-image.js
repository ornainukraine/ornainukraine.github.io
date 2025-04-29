// js_scripts/zoom-image.js

document.addEventListener("DOMContentLoaded", function () {
  const zoomableImages = document.querySelectorAll(".zoomable-img");

  zoomableImages.forEach(img => {
    img.addEventListener("click", function () {
      const overlay = document.createElement("div");
      overlay.classList.add("zoom-overlay");

      const zoomedImg = document.createElement("img");
      zoomedImg.src = img.src;
      overlay.appendChild(zoomedImg);
      document.body.appendChild(overlay);
      overlay.style.display = "block";

      // Підключаємо Panzoom для pinch-to-zoom
      Panzoom(zoomedImg, {
        maxScale: 5,
        contain: 'outside'
      });

      // Закриття по кліку
      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});
