'use strict';

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
let randomNumber = Math.trunc(Math.random() * 10 + 1);    //arrow function that returns a random number between 1 and 10
const number = document.querySelector('.number');
const body = document.querySelector('body');
const message = document.querySelector('.message');
const highscoreText = document.querySelector('.highscore');
const scoreText = document.querySelector('.score');
let score = 10;

btnCheck.addEventListener('click', function () {
  const inputNumber = document.querySelector('.guess').value;

  if (!inputNumber) {
    message.textContent = 'Invalid number! ⛔';

    //Our number is lower
  } else if (inputNumber < randomNumber) {
    message.textContent = 'Too low...';
    score--;
    scoreText.textContent = score;
    if (score <= 0) {
      message.textContent = 'You lost!! 💥';
      btnCheck.disabled = true;     //Disable btnCheck
    }

    //Our number is higher
  } else if (inputNumber > randomNumber) {
    message.textContent = 'Too high...';
    score--;
    scoreText.textContent = score;
    if (score <= 0) {
      message.textContent = 'You lost!! 💥';
      btnCheck.disabled = true;     //Disable btnCheck
    }

    //Your number is correct
  } else {
    message.textContent = 'Congratulations!! 🎉';
    highscoreText.textContent = score;
    number.textContent = randomNumber;
    body.style.backgroundColor = '#60B347';
  }
});

btnAgain.addEventListener('click', function () {    //Restore the principal values without lost the previous games
  document.querySelector('.guess').value = '';
  score = 10;
  scoreText.textContent = score;
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  randomNumber = Math.trunc(Math.random() * 10 + 1);
});
