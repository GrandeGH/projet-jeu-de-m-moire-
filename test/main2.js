const allIcons = [
    "❤️", "⭐", "🌙", "🔔", "🚗", "🧊", "🍃", "😊", "🎵", "🎲", "⚽", "🎈"
];

const board = document.getElementById("game-board");
const status = document.getElementById("status");
const resetBtn = document.getElementById("reset-btn");
const easyBtn = document.getElementById("easy-btn");
const mediumBtn = document.getElementById("medium-btn");
const hardBtn = document.getElementById("hard-btn");

let flippedCards = [];
let matchedCards = [];
let difficulty = "facile"; // Par défaut, le jeu démarre en mode facile

const iconsColors = ["#e74c3c", "#f1c40f", "#3498db", "#9b59b6", "#2ecc71", 
    "#e67e22", "#1abc9c", "#ff4757"];

// Ajout des événements pour changer la difficulté
easyBtn.addEventListener("click", () => setDifficulty("facile"));
mediumBtn.addEventListener("click", () => setDifficulty("moyen"));
hardBtn.addEventListener("click", () => setDifficulty("difficile"));
resetBtn.addEventListener("click", initGame);

// Fonction pour mélanger un tableau
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Fonction pour changer la difficulté et relancer le jeu
function setDifficulty(level) {
    difficulty = level;
    initGame();
}

// Fonction pour créer une carte
function createCard(icon, color) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.style.color = color;
    cardBack.textContent = icon;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    card.addEventListener("click", () => flipCard(card));
    card.dataset.icon = icon;
    return card;
}

// Fonction pour retourner une carte
function flipCard(card) {
    if (flippedCards.length === 2 || card.classList.contains("flipped") || 
        card.classList.contains("matched")) 
        return;

    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2)
        checkForMatch();
}

// Fonction pour vérifier si les cartes retournées sont identiques
function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.icon === card2.dataset.icon) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedCards.push(card1, card2);
    } else {
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
        }, 1000);
    }

    flippedCards = [];
    checkGameOver();
}

// Fonction pour vérifier si le jeu est terminé
function checkGameOver() {
    const totalPairs = getPairCount();
    if (matchedCards.length === totalPairs * 2) {
        status.innerText = "Félicitations ! Vous avez trouvé toutes les paires 🎉";
    }
}

// Fonction pour initialiser le jeu en fonction de la difficulté
function initGame() {
    if (!board) {
        console.error("Erreur : l'élément #game-board n'a pas été trouvé.");
        return;
    }

    board.innerHTML = "";
    status.innerText = "";
    flippedCards = [];
    matchedCards = [];

    const totalPairs = getPairCount();

    // Sélectionne aléatoirement les icônes pour le niveau choisi
    const selectedIcons = [...allIcons].sort(() => 0.5 - Math.random()).slice(0, totalPairs);
    const gameIcons = [...selectedIcons, ...selectedIcons]; // Doubler pour les paires

    shuffle(gameIcons);

    gameIcons.forEach((icon, index) => {
        const color = iconsColors[index % iconsColors.length];
        const card = createCard(icon, color);
        board.appendChild(card);
    });
}

// Fonction pour obtenir le nombre de paires en fonction de la difficulté
function getPairCount() {
    if (difficulty === "facile") return 6; // 12 cartes (6 paires)
    if (difficulty === "moyen") return 9;  // 18 cartes (9 paires)
    return 12; // Difficile : 24 cartes (12 paires)
}

// Lancement initial du jeu
initGame();

