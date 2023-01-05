'use strict';

//Selecting Elements
const diceEl = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Starting Conditions
diceEl.classList.add('hidden');
let current0 = 0;
let current1 = 0;
let score0Container = 0;
let score1Container = 0;
score0El.textContent = score0Container;
score1El.textContent = score1Container;
let turn = 1;
let playing = true;

const diceNumber = function (number) {
  //function that select the random dice
  diceEl.src = `dice-${number}.png`;
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    let randomNum = Math.trunc(Math.random() * 6 + 1);
    switch (randomNum) {
      case 1:
        diceNumber(randomNum);
      case 2:
        diceNumber(randomNum);
      case 3:
        diceNumber(randomNum);
      case 4:
        diceNumber(randomNum);
      case 5:
        diceNumber(randomNum);
      case 6:
        diceNumber(randomNum);
    }

    if (randomNum != 1) {
      if (turn % 2 != 0) {
        current0 += randomNum;
        current0El.textContent = Number(current0);
      } else {
        current1 += randomNum;
        current1El.textContent = Number(current1);
      }
    } else {
      if (turn % 2 != 0) {
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        current0 = 0;
        current0El.textContent = 0;
      } else {
        player1.classList.toggle('player--active');
        player0.classList.toggle('player--active');
        current1 = 0;
        current1El.textContent = 0;
      }

      turn++;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    if (turn % 2 != 0) {
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
      score0Container += current0;
      score0El.textContent = score0Container;
      current0 = 0;
      current0El.textContent = 0;
    } else {
      player1.classList.toggle('player--active');
      player0.classList.toggle('player--active');
      score1Container += current1;
      score1El.textContent = score1Container;
      current1 = 0;
      current1El.textContent = 0;
    }

    if (score0Container >= 50) {
      player0.classList.add('player--winner');
      player0.classList.add('player--active');
      playing = false;
      diceEl.classList.add('hidden');
    } else if (score1Container >= 50) {
      player1.classList.add('player--winner');
      player1.classList.remove('player--active');
      playing = false;
      diceEl.classList.add('hidden');
    }
    turn++;
  }
});

btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  current0 = 0;
  current1 = 0;
  score0Container = 0;
  score1Container = 0;
  score0El.textContent = score0Container;
  score1El.textContent = score1Container;
  current0El.textContent = current0;
  current1El.textContent = current1;
  playing = true;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  turn = 1;
});
