// Переключение игр
function showGame(gameId, gameName) {
    document.querySelectorAll('.game-card').forEach(card => card.classList.remove('active'));
    document.getElementById(gameId).classList.add('active');
    document.getElementById('active-game-name').innerText = gameName + " ▼";
}

// КЛИКЕР
let score = 0, timeLeft = 30, timerId = null, isPlaying = false;
const clickBtn = document.getElementById('click-btn');
const highScoreDisplay = document.getElementById('high-score');
highScoreDisplay.innerText = localStorage.getItem('clickerRecord') || 0;

clickBtn.addEventListener('click', () => {
    if (!isPlaying && timeLeft === 30) {
        isPlaying = true;
        timerId = setInterval(() => {
            timeLeft--;
            document.getElementById('timer').innerText = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timerId);
                isPlaying = false;
                alert(`Конец! Очки: ${score}`);
                if(score > (localStorage.getItem('clickerRecord') || 0)) {
                    localStorage.setItem('clickerRecord', score);
                    highScoreDisplay.innerText = score;
                }
            }
        }, 1000);
    }
    if (timeLeft > 0) {
        score++;
        document.getElementById('score').innerText = score;
        clickBtn.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    }
});

function resetClicker() {
    clearInterval(timerId);
    score = 0; timeLeft = 30; isPlaying = false;
    document.getElementById('score').innerText = '0';
    document.getElementById('timer').innerText = '30';
}

// ГЕНЕРАТОР
function generateAdventure() {
    const h = ['Герой', 'Маг', 'Пират'], p = ['в лесу', 'на море', 'в горах'], f = ['с драконом', 'со штормом', 'с троллем'];
    const story = `${h[Math.floor(Math.random()*3)]} ${p[Math.floor(Math.random()*3)]} сражается ${f[Math.floor(Math.random()*3)]}.`;
    document.getElementById('adventure-result').innerText = story;
}

// УГАДАЙ ЧИСЛО
let secret = Math.floor(Math.random() * 100) + 1, att = 10;
function checkGuess() {
    const val = parseInt(document.getElementById('guess-input').value);
    const fb = document.getElementById('guess-feedback');
    if (isNaN(val)) return;
    att--;
    document.getElementById('attempts-count').innerText = att;
    if (val === secret) { fb.innerText = "Угадал!"; fb.style.color = "green"; document.getElementById('guess-reset').style.display = 'block'; }
    else if (att <= 0) { fb.innerText = "Проиграл! Это было " + secret; document.getElementById('guess-reset').style.display = 'block'; }
    else { fb.innerText = val > secret ? "Меньше" : "Больше"; fb.style.color = "orange"; }
}
function initGuessGame() { secret = Math.floor(Math.random() * 100) + 1; att = 10; document.getElementById('attempts-count').innerText = att; document.getElementById('guess-feedback').innerText = ''; document.getElementById('guess-reset').style.display = 'none'; }
