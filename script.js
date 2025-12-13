document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("enterBtn");

    btn.addEventListener("click", () => {
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "cinematic.html";
        }, 800);
    });
});
