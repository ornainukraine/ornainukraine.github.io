// js_scripts/image-modal.js

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const thumbnail = document.getElementById("thumbnail");
  const closeBtn = document.querySelector(".close");

  if (thumbnail && modal && modalImg && closeBtn) {
    thumbnail.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    };

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
});
