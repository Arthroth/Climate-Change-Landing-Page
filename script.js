document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookie");

    if (!localStorage.getItem("arthroth_eu_consent")) {
        setTimeout(() => {
            banner.style.display = "block";
        }, 1000);
    }

    acceptBtn.addEventListener("click", function() {
        localStorage.setItem("arthroth_eu_consent", "true");
        banner.style.display = "none";
    });
});