let secret = Math.floor(Math.random() * 100) + 1;
let tries = 10;

let best = localStorage.getItem('guessBest');
document.getElementById('best').textContent = best ? best + ' попыток' : '—';

document.getElementById('checkBtn').onclick = () => {
    const val = parseInt(document.getElementById('guessInput').value);
    if (!val || tries <= 0) return;

    tries--;
    document.getElementById('tries').textContent = tries;

    if (val === secret) {
        document.getElementById('message').innerHTML =
            `<div class="success">Поздравляем! Вы угадали за ${10 - tries} попыток!</div>`;

        if (!best || (10 - tries) < best) {
            localStorage.setItem('guessBest', 10 - tries);
            document.getElementById('best').textContent = (10 - tries) + ' попыток';
        }
    } else {
        document.getElementById('message').textContent =
            val < secret ? 'Число больше' : 'Число меньше';
    }
};

document.getElementById('newGameBtn').onclick = () => {
    secret = Math.floor(Math.random() * 100) + 1;
    tries = 10;
    document.getElementById('tries').textContent = tries;
    document.getElementById('message').textContent = '';
};
