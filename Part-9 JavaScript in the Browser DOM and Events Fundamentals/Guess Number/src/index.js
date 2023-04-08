'use strict';

// Document is the entry point for the DOM.
// JavaScript is not DOM but DOM is inside JS and some part of JS is DOM.
// JavaScript is just a dialect of Echma Script specifications.
// DOM and it's methods are WEB APIs, they are libraries that browser implements and we can interact and access by JS.

let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
var chances = 5;
let Score = 0;
let gameStatus;

const DisplayMessage = function (id, message) {
  document.querySelector(id).textContent = message;
};

const ClassValue = function (id, value) {
  document.querySelector(id).classList.value = value;
};

const resetParams = function () {
  number = Math.trunc(Math.random() * 20 + 1);
  console.log('New', number);
  chances = 5;
  DisplayMessage('#chances', chances);
  gameStatus = '';
  DisplayMessage('#center-box', '?');
  DisplayMessage('#status', 'Enter your First Guess');
  DisplayMessage('#center-text', 'Guess My Number');
  ClassValue(
    '#display',
    'h-32 w-72 p-7 text-center text-6xl text-White rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-DarkGrey border-Primary border-2'
  );
  ClassValue(
    '#check-button',
    'bg-Primary text-2xl px-12 py-3 mt-4 rounded-xl ml-14'
  );
  ClassValue(
    '#chances',
    'text-Primary text-3xl border-Secondary p-2 px-4 border-2 rounded-2xl'
  );
  ClassValue(
    '#score',
    'text-Primary text-3xl border-Secondary p-2 px-4 border-2 rounded-2xl'
  );
  DisplayMessage('#again-button', '');
  ClassValue('#again-button', '');
};

const playAgainButton = function () {
  DisplayMessage('#again-button', 'Play Again');
  if (gameStatus === 'win') {
    ClassValue('#again-button', 'bg-Green text-2xl px-8 py-3 mt-14 rounded-xl');
  } else if (gameStatus === 'lose') {
    ClassValue('#again-button', 'bg-Red text-2xl px-8 py-3 mt-14 rounded-xl');
  }
  return;
};

const win = function (userNumber) {
  DisplayMessage('#center-box', userNumber);
  DisplayMessage('#status', 'Correct Guess');
  DisplayMessage('#center-text', 'You Wind');
  Score += chances;
  DisplayMessage('#score', Score);
  ClassValue('#display', 'h-1 w-screen bg-Green my-2');
  ClassValue(
    '#center-box',
    'h-32 w-72 p-7 text-center text-6xl text-White rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-DarkGrey border-Green border-2'
  );
  ClassValue(
    '#check-button',
    'bg-Green text-2xl px-12 py-3 mt-4 rounded-xl ml-14'
  );
  ClassValue(
    '#chances',
    'text-Green text-3xl border-Secondary p-2 px-4 border-2 rounded-2xl'
  );
  ClassValue(
    '#score',
    'text-Green text-3xl border-Secondary p-2 px-4 border-2 rounded-2xl'
  );
  gameStatus = 'win';
  playAgainButton();
  return;
};

const DisplayChances = function (chances) {
  DisplayMessage('#chances', chances);
  if (chances == 0) {
    DisplayMessage('#center-text', 'Game Over');
    DisplayMessage('#status', 'You Lost The Game');
    Score -= 5;
    DisplayMessage('#score', Score);
    gameStatus = 'lose';
    playAgainButton();
    return;
  }
};

const highLow = function (userNumber) {
  let message;
  if (userNumber === number) {
    win(userNumber);
    return;
  } else if (userNumber > number + 5) {
    message = 'Too High';
  } else if (userNumber > number) {
    message = 'High';
  } else if (userNumber < number - 5) {
    message = 'Too Low';
  } else if (userNumber < number) {
    message = 'Low';
  }
  DisplayMessage('#status', message);
  chances--;
  DisplayChances(chances);
  console.log('Chances', chances);
};

function Check() {
  const userNumber = Number(document.querySelector('#check-holder').value); // From interface we receive strings, Number function is used to convert to number
  document.querySelector('#check-holder').value = '';
  if (!userNumber && userNumber === 0) {
    document.querySelector('#status').textContent = 'Enter Valid Number'; // If no input
    return;
  } else {
    highLow(userNumber);
    return;
  }
}

document.querySelector('#check-button').addEventListener('click', Check);
document.querySelector('#again-button').addEventListener('click', resetParams);
