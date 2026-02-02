const heroes = ["рыцарь", "маг", "вор"];
const locations = ["тёмном лесу", "заброшенном замке", "подводном царстве"];
const villains = ["драконом", "колдуном", "гоблином"];

const story = document.getElementById("story");

document.getElementById("generateBtn").addEventListener("click", () => {
    const hero = heroes[Math.floor(Math.random() * heroes.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const villain = villains[Math.floor(Math.random() * villains.length)];

    const text = `Ваш персонаж — ${hero}, находится в ${location} и сражается с ${villain}.`;
    story.textContent = text;

    localStorage.setItem("lastAdventure", text);
});

story.textContent = localStorage.getItem("lastAdventure") || "";
