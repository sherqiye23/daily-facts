const emoji = document.getElementById("emoji");
const category = document.getElementById("category");
const fact = document.getElementById("fact");
const button = document.getElementById("randomBtn");
const card = document.querySelector(".card");
const todayBtn = document.getElementById("todayBtn");

let todayFact = {};
let facts = [];

async function loadTodayFact() {

    const response = await fetch("current-fact.json");

    todayFact = await response.json();

    showTodayFact();

}

function showTodayFact() {

    card.classList.add("animate");

    setTimeout(() => {

        emoji.textContent = todayFact.emoji;
        category.textContent = todayFact.category;
        fact.textContent = todayFact.fact;

        card.classList.remove("animate");

    }, 300);

}

async function loadFacts() {

    const response = await fetch("facts.json");

    facts = await response.json();

    await loadTodayFact();

}

function randomFact() {

    card.classList.add("animate");

    setTimeout(() => {

        const random = Math.floor(Math.random() * facts.length);

        emoji.textContent = facts[random].emoji;
        category.textContent = facts[random].category;
        fact.textContent = facts[random].fact;

        card.classList.remove("animate");

    }, 300);

}

button.addEventListener("click", randomFact);
todayBtn.addEventListener("click",showTodayFact);

loadFacts();