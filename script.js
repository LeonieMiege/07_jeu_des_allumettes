// Déclaration des variables

let remainingMatches = 50;

// Déclaration des fonctions

function matchesRemoved(remainingMatches, numberRemoved) {
    return remainingMatches - numberRemoved;
};

function matchesGame() {
    while (remainingMatches > 0) {
        let numberRemoved = parseInt(prompt(`${remainingMatches} 🥢 remaining ! \nHow many 🥢 do you want to remove (1-6)?`));
        if (numberRemoved >= 1 && numberRemoved <= 6 && numberRemoved <= remainingMatches) {
            remainingMatches = matchesRemoved(remainingMatches, numberRemoved)
        } else if (numberRemoved < 1 || numberRemoved > 6) {
            alert("Number of 🥢 allowed to be removed : 1-6")
        }
    }
    alert("🎉 Congrats, you have won!");

};

// Exécution de la fonction principale

matchesGame();