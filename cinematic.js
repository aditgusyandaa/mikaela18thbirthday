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
