// Déclaration des variables

let remainingMangoes = 30;
const playerOneChoice = document.querySelector("#numberRemoved");
const leftMangoes = document.querySelector("#remainingMangoes");
const incorrectNumber = document.querySelector("#incorrectNumber");
const victory = document.querySelector("#hasWon");

// Déclaration des fonctions

function currentNumberofMangoes(a, b) {
    let result = a - b
    return result
}

function askPlayerToRemoveMangoes() {
    const mangoesRemoved = playerOneChoice.value;
    if (mangoesRemoved <= remainingMangoes) {
        remainingMangoes = currentNumberofMangoes(remainingMangoes, parseInt(mangoesRemoved));
        leftMangoes.innerText = `🥭 Remaining mangoes : ${remainingMangoes}`;
    } else {
        incorrectNumber.innerText = '⚠️ The number of mangoes you have chosen is superior to the number of remaining mangoes.';
    }
}

function mangoesGame() {
    if (remainingMangoes > 0) {
        askPlayerToRemoveMangoes()
    } else if (remainingMangoes == 0) {
        victory.innerText = '✨🎉 Congrats, you have won ✨🎉'
    }
}

playerOneChoice.addEventListener('change', () => {
    mangoesGame()
});


