// Déclaration des variables

let remainingMangoes = 30;
let currentPlayer = 1;
let totalPlayers = 2;
const playerCountSelect = document.querySelector("#playerCount");
const startGameButton = document.querySelector("#startGame");
const playerChoiceSelect = document.querySelector("#numberRemoved");
const playerTurn = document.querySelector("#playerTurn");
const leftMangoes = document.querySelector("#remainingMangoes");
const incorrectNumber = document.querySelector("#incorrectNumber");


// Déclaration des fonctions

playerChoiceSelect.disabled = true;
startGameButton.disabled = true;

function initializeGame() {
    totalPlayers = parseInt(playerCountSelect.value);
    currentPlayer = 1;
    remainingMangoes = 30;
    playerCountSelect.disabled = true;
    startGameButton.disabled = true;
    playerChoiceSelect.disabled = false;
    playerChoiceSelect.value = "";
    playerTurn.innerText = "🔄 Player 1's turn";
    leftMangoes.innerText = `🥭 Remaining mangoes : ${remainingMangoes}`;
    incorrectNumber.innerText = "";
}

function currentNumberofMangoes(a, b) {
    let result = a - b;
    return result;
}

function switchPlayer() {
    currentPlayer = (currentPlayer % totalPlayers) + 1;
    playerTurn.innerText = `🔄 Player ${currentPlayer}'s turn`;
}

function askPlayerToRemoveMangoes() {
    const mangoesRemoved = playerChoiceSelect.value;
    if (mangoesRemoved <= remainingMangoes) {
        remainingMangoes = currentNumberofMangoes(remainingMangoes, parseInt(mangoesRemoved));
        leftMangoes.innerText = `🥭 Remaining mangoes : ${remainingMangoes}`;
        incorrectNumber.innerText = '';
        if (remainingMangoes === 0) {
            leftMangoes.innerText = `🎉 Congrats, Player ${currentPlayer} has won! 🎉`;
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            switchPlayer();
        }
    } else {
        incorrectNumber.innerText = '⚠️ The number of mangoes you have chosen is superior to the number of remaining mangoes.';
    }
    playerChoiceSelect.value = '';
}

function mangoesGame() {
    askPlayerToRemoveMangoes();
}

// addEventListeners

playerCountSelect.addEventListener("change", () => {
    if (playerCountSelect.value !== "") {
        startGameButton.disabled = false;
    } else {
        startGameButton.disabled = true;
    }
});

startGameButton.addEventListener('click', initializeGame);

playerChoiceSelect.addEventListener('change', () => {
    mangoesGame();
});