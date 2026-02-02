let score = 0;
let time = 30;
let timer;

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const result = document.getElementById("result");

document.getElementById("clickBtn").addEventListener("click", () => {
    if (time <= 0) return;

    score++;
    scoreEl.textContent = score;
});

document.getElementById("resetBtn").addEventListener("click", () => {
    score = 0;
    time = 30;
    scoreEl.textContent = score;
    timeEl.textContent = time;
    result.textContent = "";
    clearInterval(timer);
    startTimer();
});

function startTimer() {
    timer = setInterval(() => {
        time--;
        timeEl.textContent = time;

        if (time === 0) {
            clearInterval(timer);
            result.textContent = `Игра окончена. Ваш результат: ${score}`;
            localStorage.setItem("clickerRecord", score);
        }
    }, 1000);
}

startTimer();
