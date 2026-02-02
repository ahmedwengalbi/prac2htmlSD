const btn = document.getElementById("gamesBtn");
const menu = document.getElementById("gamesMenu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
