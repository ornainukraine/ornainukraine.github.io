function showPopup(text) {
    document.getElementById("popup-text").innerHTML = text;
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-overlay").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-overlay").style.display = "none";
}

// Додаємо події для всіх елементів з класом popup-trigger
document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll(".popup-trigger");
    triggers.forEach(el => {
        el.addEventListener("click", function () {
            const text = this.getAttribute("data-popup-text");
            showPopup(text);
        });
    });
});

