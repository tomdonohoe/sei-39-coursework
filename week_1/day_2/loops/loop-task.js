var numberToGuess = 10;
var userGuess = prompt('Guess a number between 0 and 25:');

while (userGuess != numberToGuess) {
    console.log('You guessed wrong. Try again...');
    userGuess = prompt('Guess a number between 0 and 25:');
}

console.log("You guessed right!");




