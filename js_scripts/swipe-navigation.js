let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;

    if (touchendX < touchstartX - swipeThreshold) {
        goNextPage();
    }
    if (touchendX > touchstartX + swipeThreshold) {
        goPreviousPage();
    }
}

function triggerTransition(nextUrl) {
    const transition = document.getElementById('page-transition');
    transition.classList.add('active');
    setTimeout(() => {
        window.location.href = nextUrl;
    }, 300);
}

function goNextPage() {
    const currentPage = window.location.pathname;

    if (currentPage.includes("index.html")) {
        triggerTransition("pages/guides.html");
    } else if (currentPage.includes("guides.html")) {
        triggerTransition("pages/contacts.html");
    } else if (currentPage.includes("contacts.html")) {
        triggerTransition("pages/faq.html");
    }
}

function goPreviousPage() {
    const currentPage = window.location.pathname;

    if (currentPage.includes("faq.html")) {
        triggerTransition("pages/contacts.html");
    } else if (currentPage.includes("contacts.html")) {
        triggerTransition("pages/guides.html");
    } else if (currentPage.includes("guides.html")) {
        triggerTransition("index.html");
    }
}
