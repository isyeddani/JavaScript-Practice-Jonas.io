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

const resetParams = function () {
  number = Math.trunc(Math.random() * 20 + 1);
  console.log("New",number);
  chances = 5;
  document.querySelector('#chances').textContent = chances;
  gameStatus = '';
  document.querySelector('#center-box').textContent = '?';
  document.querySelector('#status').textContent = 'Enter your First Guess';
  document.querySelector('#center-text').textContent = 'Guess My Number';
  document.querySelector('#display').classList.value =
    'h-1 w-screen bg-Primary my-2';
  document.querySelector('#center-box').classList.value =
    'h-32 w-72 p-7 text-center text-6xl text-White rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-DarkGrey border-Primary border-2';
  document.querySelector('#check-button').classList.value =
    'bg-Primary text-2xl px-12 py-3 mt-4 rounded-xl ml-14';
  document.querySelector('#chances').classList.value =
    'text-Primary text-3xl border-Secondary p-2 px-4 border-2 rounded-2xl';
  document.querySelector('#score').classList.value =
    'text-Primary text-3xl border-Secondary p-2 px-4 border-2 rounded-2xl';
  document.querySelector('#again-button').textContent =  document.querySelector('#again-button').classList.value =
    '';
};

const playAgainButton = function () {
  console.log("Inside Again")
  if (gameStatus === 'win') {
    document.querySelector('#again-button').textContent = 'Play Again';
    document.querySelector('#again-button').classList.value =
      'bg-Green text-2xl px-8 py-3 mt-14 rounded-xl';
  } else if (gameStatus === 'lose') {
    document.querySelector('#again-button').textContent = 'Play Again';
    document.querySelector('#again-button').classList.value =
      'bg-Red text-2xl px-8 py-3 mt-14 rounded-xl';
  }
  return;
};

const win = function (userNumber) {
  document.querySelector('#center-box').textContent = userNumber;
  document.querySelector('#status').textContent = 'Correct Guess';
  document.querySelector('#center-text').textContent = 'You Win';
  Score += chances;
  document.querySelector('#score').textContent = Score;
  document.querySelector('#display').classList.value =
    'h-1 w-screen bg-Green my-2';
  document.querySelector('#center-box').classList.value =
    'h-32 w-72 p-7 text-center text-6xl text-White rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-DarkGrey border-Green border-2';
  document.querySelector('#check-button').classList.value =
    'bg-Green text-2xl px-12 py-3 mt-4 rounded-xl ml-14';
  document.querySelector('#chances').classList.value =
    'text-Green text-3xl border-Secondary p-2 px-4 border-2 rounded-2xl';
  document.querySelector('#score').classList.value =
    'text-Green text-3xl border-Secondary p-2 px-4 border-2 rounded-2xl';
  gameStatus = 'win';
  playAgainButton();
  return;
};

const DisplayChances = function (chances) {
  document.querySelector('#chances').textContent = chances;
  if (chances == 0) {
    document.querySelector('#center-text').textContent = 'Game Over';
    document.querySelector('#status').textContent = 'You Lost The Game';
    Score -= 5;
    document.querySelector('#score').textContent = Score;
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
  document.querySelector('#status').textContent = message;
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
