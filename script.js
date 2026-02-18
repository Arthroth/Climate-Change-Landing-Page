/* HEXAMON PROJECT - script.js
   Fitur: Cookie Banner & Scroll Reveal Animation
*/

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. LOGIKA COOKIE BANNER ---
    // Mengambil elemen berdasarkan ID yang telah ditentukan di index.html
    const banner = document.getElementById("cookie-banner");
    const agreeBtn = document.getElementById("agree-cookie");
    const ignoreBtn = document.getElementById("ignore-cookie");

    // Cek apakah pengguna sudah pernah menentukan pilihan sebelumnya di browser ini
    if (banner && !localStorage.getItem("cookieConsent")) {
        banner.style.display = "block";
    }

    // Fungsi saat tombol "I Agree" ditekan
    if (agreeBtn) {
        agreeBtn.addEventListener("click", function() {
            // Simpan status 'accepted' agar banner tidak muncul lagi
            localStorage.setItem("cookieConsent", "accepted");
            banner.style.display = "none";
        });
    }

    // Fungsi saat tombol "Ignore" ditekan
    if (ignoreBtn) {
        ignoreBtn.addEventListener("click", function() {
            // Simpan status 'ignored' agar banner tertutup sementara/permanen
            localStorage.setItem("cookieConsent", "ignored");
            banner.style.display = "none";
        });
    }

    // --- 2. LOGIKA SCROLL REVEAL (ZIGZAG ANIMATION) ---
    // Mengambil semua elemen yang memiliki class 'reveal' (misalnya reveal-up, reveal-left)
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 100; // Jarak dalam pixel sebelum elemen muncul

            if (elementTop < windowHeight - elementVisible) {
                // Tambahkan class 'active' untuk memicu animasi CSS
                reveals[i].classList.add("active");
            }
        }
    }

    // Jalankan fungsi reveal setiap kali pengguna melakukan scroll
    window.addEventListener("scroll", revealOnScroll);
    
    // Jalankan sekali saat halaman pertama kali dimuat 
    // (untuk mengecek elemen yang sudah ada di area layar atas)
    revealOnScroll();
});