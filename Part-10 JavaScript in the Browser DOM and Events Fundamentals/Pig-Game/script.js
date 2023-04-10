'use strict';

let Turn = false;
const playerOne = {
  nameOne: document.querySelector('#name--0'),
  scoreElement: document.getElementById('score--0'),
  score: 0,
  current: document.querySelector('#current--0'),
  currentScore: 0,
  setScore: function () {
    this.scoreElement.textContent = String(this.score);
  },
  setCurrentScore: function () {
    this.current.textContent = String(this.currentScore);
  },
};
const playerTwo = {
  name: document.querySelector('#name--1'),
  scoreElement: document.getElementById('score--1'),
  score: 0,
  current: document.querySelector('#current--1'),
  currentScore: 0,
  setScore: function () {
    this.scoreElement.textContent = String(this.score);
  },
  setCurrentScore: function () {
    this.current.textContent = String(this.currentScore);
  },
};
const Player = function () {
  if (Turn === false) {
    return playerOne;
  } else if (Turn === true) {
    return playerTwo;
  }
};

const diceDisplay = document.querySelector('.dice');
const diceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

// Initial State
playerOne.scoreElement.textContent = '0';
playerTwo.scoreElement.textContent = '0';
diceDisplay.classList.value = 'hidden';

function diceFunction() {
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  const currentPlayer = Player();
  console.log(diceNumber);
  diceDisplay.src = `dice-${diceNumber}.png`;
  diceDisplay.classList.value = 'dice';
  if (currentPlayer.currentScore === 0) {
    currentPlayer.currentScore += diceNumber;
    currentPlayer.setCurrentScore();
    return;
  } else if (currentPlayer.currentScore !== 0 && diceNumber !== 6) {
    currentPlayer.currentScore += diceNumber;
    currentPlayer.setCurrentScore();
    return;
  } else {
    currentPlayer.currentScore = 0;
    currentPlayer.setCurrentScore();
    console.log(currentPlayer.currentScore);
    if (Turn) {
      Turn = false;
    } else if (!Turn) {
      Turn = true;
    }
    return;
  }
}

const holdFunction = function () {
  const currentPlayer = Player();
  currentPlayer.score += currentPlayer.currentScore;
  currentPlayer.currentScore = 0;
  currentPlayer.setCurrentScore();
  currentPlayer.setScore();
  if (Turn) {
    Turn = false;
  } else if (!Turn) {
    Turn = true;
  }
  return;
};

diceButton.addEventListener('click', diceFunction);
holdButton.addEventListener('click', holdFunction);
