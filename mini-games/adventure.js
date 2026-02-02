const heroes = ['рыцарь', 'маг', 'гном-кузнец'];
const places = ['заброшенном замке', 'древних руинах', 'тёмном лесу'];
const enemies = ['коварным вампиром', 'ордой гоблинов', 'демоном хаоса'];

const currentStory = document.getElementById('currentStory');
const historyBox = document.getElementById('storyHistory');

document.getElementById('genStoryBtn').onclick = () => {
    const text = `Ваш персонаж — ${rand(heroes)} находится в ${rand(places)} и сражается с ${rand(enemies)}.`;
    currentStory.textContent = text;

    const stories = JSON.parse(localStorage.getItem('stories') || '[]');
    stories.unshift(`${new Date().toLocaleString()} — ${text}`);
    localStorage.setItem('stories', JSON.stringify(stories));
    render();
};

document.getElementById('clearStoryBtn').onclick = () => {
    localStorage.removeItem('stories');
    render();
};

function render() {
    historyBox.innerHTML = '';
    const stories = JSON.parse(localStorage.getItem('stories') || '[]');
    stories.forEach(s => {
        const div = document.createElement('div');
        div.textContent = s;
        historyBox.appendChild(div);
    });
}

function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

render();
