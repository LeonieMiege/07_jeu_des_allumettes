// Déclaration des fonctions

function matchesRemoved(numberRemoved,numberTotal){
    return remainingMatches = numberTotal-numberRemoved
}

function matchesGame() {
    let remainingMatches = 50;
    while (remainingMatches > 0) {
        let numberRemoved = parseInt(prompt(`${remainingMatches} remaining. How many matches do you wish to remove? N.B. You can't remove more than 6 matches.` ))
        remainingMatches = matchesRemoved(numberRemoved,numberTotal)
    }
    alert("Congrats, you won!")
};

// Exécution de la fonction principale

matchesGame();