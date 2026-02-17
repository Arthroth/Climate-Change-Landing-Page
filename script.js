document.addEventListener("DOMContentLoaded", function() {
    
    // 1. LOGIKA ANIMASI SCROLL
    const observerOptions = {
        threshold: 0.15 // Animasi jalan saat 15% elemen terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".reveal");
    animatedElements.forEach((el) => observer.observe(el));

    // 2. LOGIKA COOKIE BANNER
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookie");

    if (!localStorage.getItem("arthroth_consent")) {
        setTimeout(() => {
            if(banner) banner.style.display = "block";
        }, 1000);
    }

    if(acceptBtn) {
        acceptBtn.addEventListener("click", () => {
            localStorage.setItem("arthroth_consent", "true");
            banner.style.display = "none";
        });
    }
});