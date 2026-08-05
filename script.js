/* ==========================================
   Wedding Invitation
   Юлия & Виталий
========================================== */

// Дата свадьбы
const weddingDate = new Date("October 24, 2026 13:00:00").getTime();

// ===========================
// Таймер
// ===========================

function updateTimer() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);

// ===========================
// Музыка
// ===========================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();
        playing = true;
        musicBtn.textContent = "❚❚";

    } else {

        music.pause();
        playing = false;
        musicBtn.textContent = "♫";

    }

});

// ===========================
// Плавное появление блоков
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".section, .card, .gallery img, .timer div").forEach(item => {

    item.classList.add("fade");
    observer.observe(item);

});

// ===========================
// Галерея
// ===========================

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.left = "0";
        overlay.style.top = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.cursor = "zoom-out";
        overlay.style.zIndex = "99999";

        const photo = document.createElement("img");

        photo.src = img.src;
        photo.style.maxWidth = "90%";
        photo.style.maxHeight = "90%";
        photo.style.borderRadius = "20px";

        overlay.appendChild(photo);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

    });

});

// ===========================
// RSVP
// ===========================

const form = document.getElementById("rsvp");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Спасибо! ❤️\n\nВаш ответ сохранён.");

        form.reset();

    });

}

// ===========================
// Плавная прокрутка
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ===========================
