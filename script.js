// Déclaration des variables

let remainingMangoes = 30;
let currentPlayer = 1;
const playerTurn = document.querySelector("#playerTurn")
playerTurn.innerText = "🔄 Player 1's turn";
const playerChoice = document.querySelector("#numberRemoved");
const leftMangoes = document.querySelector("#remainingMangoes");
const incorrectNumber = document.querySelector("#incorrectNumber");
const hasWon = document.querySelector("#hasWon");

// Déclaration des fonctions

function currentNumberofMangoes(a, b) {
    let result = a - b;
    return result;
}

function switchPlayer() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
    } else {
        currentPlayer = 1;
    }
    playerTurn.innerText = `🔄 Player ${currentPlayer}'s turn`;
}

function askPlayerToRemoveMangoes() {
    const mangoesRemoved = playerChoice.value;
    if (mangoesRemoved <= remainingMangoes) {
        remainingMangoes = currentNumberofMangoes(remainingMangoes, parseInt(mangoesRemoved));
        leftMangoes.innerText = `🥭 Remaining mangoes : ${remainingMangoes}`;
        incorrectNumber.innerText = '';
        switchPlayer()
    } else {
        incorrectNumber.innerText = '⚠️ The number of mangoes you have chosen is superior to the number of remaining mangoes.';
    }
    playerChoice.value = '';
}

function mangoesGame() {
    if (remainingMangoes > 0) {
        askPlayerToRemoveMangoes();
    } else if (remainingMangoes === 0) {
        hasWon.innerText = '🎉 Congrats, you have won !';
    }
}

playerChoice.addEventListener('change', () => {
    mangoesGame();
});