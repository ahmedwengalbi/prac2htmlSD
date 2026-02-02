let score = 0;
let time = 30;
let timer = null;

const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const recordEl = document.getElementById('record');

let record = localStorage.getItem('clickerRecord') || 0;
recordEl.textContent = record;

document.getElementById('clickBtn').addEventListener('click', () => {
    if (time <= 0) return;

    score++;
    scoreEl.textContent = score;

    if (!timer) {
        timer = setInterval(() => {
            time--;
            timeEl.textContent = time;

            if (time === 0) {
                clearInterval(timer);
                timer = null;
                if (score > record) {
                    record = score;
                    localStorage.setItem('clickerRecord', record);
                    recordEl.textContent = record;
                }
            }
        }, 1000);
    }
});

document.getElementById('resetBtn').addEventListener('click', () => {
    score = 0;
    time = 30;
    scoreEl.textContent = score;
    timeEl.textContent = time;
    clearInterval(timer);
    timer = null;
});
