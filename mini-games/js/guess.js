let secret = Math.floor(Math.random() * 100) + 1;
let tries = 10;

const triesEl = document.getElementById('tries');
const msg = document.getElementById('message');

document.getElementById('checkBtn').onclick = () => {
    const val = parseInt(document.getElementById('guessInput').value);
    if (!val || tries <= 0) return;

    tries--;
    triesEl.textContent = tries;

    if (val === secret) {
        msg.textContent = 'Вы угадали!';
    } else {
        msg.textContent = val < secret ? 'Число больше' : 'Число меньше';
    }

    if (tries === 0 && val !== secret) {
        msg.textContent = 'Вы проиграли';
    }
};

document.getElementById('newGameBtn').onclick = () => {
    secret = Math.floor(Math.random() * 100) + 1;
    tries = 10;
    triesEl.textContent = tries;
    msg.textContent = '';
};
