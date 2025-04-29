document.addEventListener("DOMContentLoaded", function () {
  const zoomableImages = document.querySelectorAll(".zoomable-img");

  zoomableImages.forEach(img => {
    img.addEventListener("click", function () {
      const overlay = document.createElement("div");
      overlay.classList.add("zoom-overlay");

      const wrapper = document.createElement("div");
      wrapper.classList.add("zoom-wrapper");

      const zoomedImg = document.createElement("img");
      zoomedImg.src = img.src;
      zoomedImg.alt = img.alt || "";

      wrapper.appendChild(zoomedImg);
      overlay.appendChild(wrapper);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});
