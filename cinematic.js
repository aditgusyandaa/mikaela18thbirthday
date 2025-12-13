document.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
        document.body.classList.add("fade-in");
    });
});

const text = "🩶Happy Birthday Mikaela Kusjanto🩶";
const typingEl = document.getElementById("typing-text");
let index = 0;

// delay setelah foto fade
setTimeout(startTyping, 1800);

function startTyping() {
    if (index < text.length) {
        typingEl.textContent += text.charAt(index);
        index++;
        setTimeout(startTyping, 90);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("bgm");
    const icon = document.getElementById("soundIcon");

    audio.volume = 0.8;

    // restore sound state
    if (localStorage.getItem("sound") === "on") {
        audio.play().catch(() => {});
        icon.classList.replace("fa-volume-xmark", "fa-volume-high");
    }

    window.toggleSound = function () {
        if (audio.paused) {
            audio.play().catch(() => {});
            icon.classList.replace("fa-volume-xmark", "fa-volume-high");
            localStorage.setItem("sound", "on");
        } else {
            audio.pause();
            icon.classList.replace("fa-volume-high", "fa-volume-xmark");
            localStorage.setItem("sound", "off");
        }
    };

});
