'use strict';

let Turn = false;
let Playing = true;
const playerOne = {
  name: document.querySelector('#name--0'),
  scoreElement: document.getElementById('score--0'),
  score: 0,
  current: document.querySelector('#current--0'),
  currentScore: 0,
  playerCard: document.querySelector('.player--0'),
  setScore: function () {
    this.scoreElement.textContent = String(this.score);
  },
  setCurrentScore: function () {
    this.current.textContent = String(this.currentScore);
  },
  setPlayerCard: function () {
    playerTwo.playerCard.classList.value = 'player player--1 player--active';
    this.playerCard.classList.value = 'player player--0';
  },
};
const playerTwo = {
  name: document.querySelector('#name--1'),
  scoreElement: document.getElementById('score--1'),
  score: 0,
  current: document.querySelector('#current--1'),
  currentScore: 0,
  playerCard: document.querySelector('.player--1'),
  setScore: function () {
    this.scoreElement.textContent = String(this.score);
  },
  setCurrentScore: function () {
    this.current.textContent = String(this.currentScore);
  },
  setPlayerCard: function () {
    playerOne.playerCard.classList.value = 'player player--0 player--active';
    this.playerCard.classList.value = 'player player--1';
  },
};

const diceDisplay = document.querySelector('.dice');
const diceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

// Initial State
playerOne.scoreElement.textContent = '0';
playerTwo.scoreElement.textContent = '0';
diceDisplay.classList.value = 'hidden';

const Player = function () {
  if (Turn === false) {
    return playerOne;
  } else if (Turn === true) {
    return playerTwo;
  }
};

function diceFunction() {
  if (Playing) {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    const currentPlayer = Player();
    console.log(diceNumber);
    diceDisplay.src = `dice-${diceNumber}.png`;
    diceDisplay.classList.value = 'dice';
    if (currentPlayer.currentScore === 0) {
      currentPlayer.currentScore += diceNumber;
      currentPlayer.setCurrentScore();
    } else if (currentPlayer.currentScore !== 0 && diceNumber !== 6) {
      currentPlayer.currentScore += diceNumber;
      currentPlayer.setCurrentScore();
    } else {
      currentPlayer.currentScore = 0;
      currentPlayer.setCurrentScore();
      currentPlayer.setPlayerCard();
      if (Turn) {
        Turn = false;
      } else if (!Turn) {
        Turn = true;
      }
      return;
    }
    if (currentPlayer.score + currentPlayer.currentScore >= 25) {
      currentPlayer.score += currentPlayer.currentScore;
      currentPlayer.currentScore = 0;
      currentPlayer.setCurrentScore();
      currentPlayer.setScore();
      Winner(currentPlayer);
    }
  }
}

const holdFunction = function () {
  if (Playing) {
    const currentPlayer = Player();
    currentPlayer.score += currentPlayer.currentScore;
    currentPlayer.currentScore = 0;
    currentPlayer.setCurrentScore();
    currentPlayer.setScore();
    currentPlayer.setPlayerCard();
    if (Turn) {
      Turn = false;
    } else if (!Turn) {
      Turn = true;
    }
    return;
  }
};

const reset = function () {
    playerOne.currentScore = 0;
    playerOne.setCurrentScore();
    playerOne.score = 0;
    playerOne.setScore();
    playerOne.setPlayerCard();
    playerOne.name.classList.value = 'name';
    playerTwo.currentScore = 0;
    playerTwo.setCurrentScore();
    playerTwo.score = 0;
    playerTwo.setScore();
    playerTwo.setPlayerCard();
    playerTwo.name.classList.value = 'name';
    Turn = false;
    Playing = true
};

const Winner = function (player) {
  Playing = false;
  player.playerCard.classList.value = 'player player--0 player--winner';
  player.name.classList.value = 'player--winner name';
  diceDisplay.classList.value = 'hidden';
};

diceButton.addEventListener('click', diceFunction);
holdButton.addEventListener('click', holdFunction);
newGame.addEventListener('click', reset);
