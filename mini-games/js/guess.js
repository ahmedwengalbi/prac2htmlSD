let number = Math.floor(Math.random() * 100) + 1;
let tries = 10;

const message = document.getElementById("message");
const triesEl = document.getElementById("tries");

document.getElementById("checkBtn").addEventListener("click", () => {
    const input = parseInt(document.getElementById("guessInput").value);

    if (isNaN(input)) return;

    tries--;
    triesEl.textContent = tries;

    if (input === number) {
        message.textContent = "🎉 Ты угадал!";
    } else if (input > number) {
        message.textContent = "Меньше";
    } else {
        message.textContent = "Больше";
    }

    if (tries === 0 && input !== number) {
        message.textContent = `Проиграл 😢 Число было ${number}`;
    }
});
