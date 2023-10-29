var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessInput = document.getElementById('guessInput');
var result = document.getElementById('result');

function checkGuess() {
  var userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    result.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  if (userGuess === randomNumber) {
    result.textContent = 'Congratulations! You guessed the correct number.';
  } else if (userGuess < randomNumber) {
    result.textContent = 'Too low! Try again.';
  } else {
    result.textContent = 'Too high! Try again.';
  }

  guessInput.value = '';
  guessInput.focus();
}
