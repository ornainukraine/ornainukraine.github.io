console.log('Swipe script loaded!');

document.addEventListener('DOMContentLoaded', () => {
    let touchstartX = 0;
    let touchendX = 0;

    const swipeThreshold = 50; // мінімальна довжина свайпу для спрацювання

    // Маршрутизація: на які сторінки переходити
    const routes = [
        "index.html",
        "pages/guides.html",
        "pages/contacts.html",
        "pages/faq.html"
    ];

    function getCurrentPageIndex() {
        const path = window.location.pathname;
        return routes.findIndex(route => path.endsWith(route));
    }

    function triggerTransition(url) {
        const transition = document.getElementById('page-transition');
        if (transition) {
            transition.classList.add('active');
        }
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }

    function handleSwipe() {
        const currentIndex = getCurrentPageIndex();
        if (currentIndex === -1) return; // Якщо сторінка не знайдена — нічого не робимо

        if (touchendX < touchstartX - swipeThreshold && currentIndex < routes.length - 1) {
            // Свайп вліво → вперед
            triggerTransition(routes[currentIndex + 1]);
        }
        if (touchendX > touchstartX + swipeThreshold && currentIndex > 0) {
            // Свайп вправо → назад
            triggerTransition(routes[currentIndex - 1]);
        }
    }

    document.addEventListener('touchstart', (event) => {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', (event) => {
        touchendX = event.changedTouches[0].screenX;
        handleSwipe();
    }, false);
});
