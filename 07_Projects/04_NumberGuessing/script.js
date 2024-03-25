let randomNumber = parseInt(Math.random() * 100 + 1);

// Declaration 
const userInput = document.querySelector('#user_input');
const leftChance = document.querySelector('.leftChance');
const submitButton = document.querySelector('.submitButton');
const newGameButton = document.querySelector('.newGameButton');
const previousGuess = document.querySelector('.previousGuess');
const displayMessage = document.querySelector('.displayMessage');

let prevGuess = [];
let numGuess = 10;
let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guessedNumber = userInput.value;
    console.log(guessedNumber);
    validateGuess(guessedNumber);
  });
}

function validateGuess(guess) {
  if (guess < 1 || guess > 100) {
    displayMessage.innerHTML = `Please enter number from 1 to 100.`;
  } else {
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage.innerHTML = `Congratulations, You guessed it right.`;
    displayMessage.style.fontSize = '16px';
    endGame();
  } else if (guess < randomNumber) {
    displayMessage.innerHTML = `Sorry, your number is too low.`;
    displayGuess(guess);
  } else if (guess > randomNumber) {
    displayMessage.innerHTML = `Sorry, your number is too high.`;
    displayGuess(guess);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuess.innerHTML += `${guess} `;
  numGuess--;
  leftChance.innerHTML = `${numGuess}`;
  if (numGuess < 1) {
    displayMessage.innerHTML = `Sorry, you ran out of chances.Number : ${randomNumber}`;
    endGame();
  }
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  newGameButton.classList.add('startButton');
  newGameButton.innerHTML = `Start new game`;
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector(".startButton");
  newGame.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 10;
    previousGuess.innerHTML = "";
    leftChance.innerHTML = `${10}`;
    userInput.removeAttribute("disabled");
    displayMessage.innerHTML = `Try your luck...`;
    displayMessage.style.fontSize = '12px';
    newGameButton.innerHTML = '';
    newGameButton.classList.remove('startButton');
    playGame = true;
  });
}