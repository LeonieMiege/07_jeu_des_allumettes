// Déclaration des fonctions

function matchesRemoved(remainingMatches, numberRemoved) {
    return remainingMatches - numberRemoved;
};

function matchesGame() {
    let remainingMatches = 50;
    while (remainingMatches > 0) {
        let numberRemoved = parseInt(prompt(`${remainingMatches} matches remaining. How many matches do you want to remove (1-6)?`));
        if (numberRemoved >= 1 && numberRemoved <= 6) {
            remainingMatches = matchesRemoved(remainingMatches, numberRemoved)
        }
        else if (numberRemoved < 1 || numberRemoved > 6) {
            alert("Number allowed to be removed : 1-6")
        }
    }
    alert("Congrats, you have won!");
};

// Exécution de la fonction principale

matchesGame();