const heroes = ['рыцарь', 'маг', 'вор'];
const places = ['тёмном лесу', 'замке', 'подземелье'];
const enemies = ['драконом', 'гоблином', 'колдуном'];

const currentStory = document.getElementById('currentStory');
const historyBox = document.getElementById('storyHistory');

document.getElementById('genStoryBtn').onclick = () => {
    const text = `Ваш персонаж — ${rand(heroes)} находится в ${rand(places)} и сражается с ${rand(enemies)}.`;
    currentStory.textContent = text;

    const stories = JSON.parse(localStorage.getItem('stories') || '[]');
    stories.push(text);
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
        const p = document.createElement('p');
        p.textContent = s;
        historyBox.appendChild(p);
    });
}

function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

render();
