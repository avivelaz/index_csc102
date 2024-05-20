// Function roll single die and return random number between 1 and 6
function rollDie () {
    return Math.floor(Math.random() *6) + 1;
}
// Function Play Craps Game
function playCraps() {
    // Roll two dice
    let die1 = rollDie();
    let die2 = rollDie();
    let sum = die1 + die2; // Calculate the sum of the dice
}
// Get Result div to display  the output
let ResultDiv = document.getElementById("result");

// Determine Game outcome on based on the Sum and values of Dice
if (sum ===7 || sum === 11){
    ResultDiv.innerHTML = 'Rolled ${die1} and ${die2}, Sum is ${sum}. Craps - Lose';
} else if (die1 === die2 && die1 % 2 === 0) {
    ResultDiv.innerHTML = 'Rolled ${die1} and ${die2}. Sum is ${sum}. Double and even - Won';
} else {
    ResultDiv.innerHTML = 'Rolled ${die1} and ${die2}. Sum is ${sum}. Pushed';
}