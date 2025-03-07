// Déclaration des variables

let remainingMangoes = 30;
let currentPlayer = 1;
let totalPlayers = 2;
const playerTurn = document.querySelector("#playerTurn");
playerTurn.innerText = "🔄 Player 1's turn";
const playerChoiceSelect = document.querySelector("#numberRemoved");
const leftMangoes = document.querySelector("#remainingMangoes");
const incorrectNumber = document.querySelector("#incorrectNumber");
const playerCountSelect = document.querySelector("#playerCount");
const startGameButton = document.querySelector("#StartGame");

// Déclaration des fonctions

function currentNumberofMangoes(a, b) {
    let result = a - b;
    return result;
}

function switchPlayer() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
    } else if (currentPlayer === 2) {
        currentPlayer = 3;
    } else if (currentPlayer === 3) {
        currentPlayer = 4;
    } else if (currentPlayer === 4) {
        currentPlayer = 1;
    }
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
            playerChoiceSelect.disabled = true;
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

playerChoiceSelect.addEventListener('change', () => {
    mangoesGame();
});