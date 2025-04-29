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

      // Показати оверлей
      overlay.style.display = "block";

      // Закриття по кліку
      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});
