document.addEventListener("DOMContentLoaded", function () {
  const zoomableImages = document.querySelectorAll(".zoomable-img");

  zoomableImages.forEach(img => {
    img.addEventListener("click", function () {
      // Створюємо оверлей
      const overlay = document.createElement("div");
      overlay.classList.add("zoom-overlay");

      // Створюємо новий <img> — без класу zoomable-img
      const zoomedImg = document.createElement("img");
      zoomedImg.src = img.src;
      zoomedImg.alt = img.alt || "";

      // Додаємо картинку в оверлей
      overlay.appendChild(zoomedImg);
      document.body.appendChild(overlay);

      // Відображення
      overlay.style.display = "block";

      // Закриття при кліку
      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});
