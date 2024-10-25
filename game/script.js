let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function () {
    const userGuess = Number(document.getElementById('guessInput').value);
    attempts++;

    let message = '';
    if (userGuess < randomNumber) {
        message = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        message = 'Too high! Try again.';
    } else if (userGuess === randomNumber) {
        message = `Congratulations! You guessed it in ${attempts} attempts.`;
    } else {
        message = 'Please enter a valid number.';
    }

    document.getElementById('message').textContent = message;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
});