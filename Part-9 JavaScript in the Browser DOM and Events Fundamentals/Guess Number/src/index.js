'use strict';

// Document is the entry point for the DOM.
// JavaScript is not DOM but DOM is inside JS and some part of JS is DOM.
// JavaScript is just a dialect of Echma Script specifications.
// DOM and it's methods are WEB APIs, they are libraries that browser implements and we can interact and access by JS.

const number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
let chances = 5;
let highScore = 0;

const win = function (userNumber, chances, highScore) {
  document.querySelector('#center-box').textContent = userNumber;
  document.querySelector('#status').textContent = 'Correct Guess';
  document.querySelector('#center-text').textContent = 'You Win';
  highScore = chances;
  document.querySelector('#high-score').textContent = highScore;
  document.querySelector('#display').classList.value =
    'h-1 w-screen bg-Green my-2';
  document.querySelector('#center-box').classList.value =
    'h-32 w-72 p-7 text-center text-6xl text-White rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-DarkGrey border-Green border-2';
  document.querySelector('#check-button').classList.value =
    'bg-Green text-2xl px-12 py-3 mt-4 rounded-xl ml-14';
  document.querySelector('#chances').classList.value =
    'text-Green text-3xl border-Secondary p-2 px-4 border-2 rounded-2xl';
  document.querySelector('#high-score').classList.value =
    'text-Green text-3xl border-Secondary p-2 px-4 border-2 rounded-2xl';
  return;
};

const DisplayChances = function (chances){
  document.querySelector('#chances').textContent = chances;
  if (chances == 0) {
    document.querySelector('#center-text').textContent = 'Game Over';
    document.querySelector('#status').textContent = 'You Lost The Game';
    return;
  }
}

const highLow = function (userNumber, chances, highScore) {
  // If Player Wins
  if (userNumber === number) {
    win(userNumber, chances, highScore);
    return;
  } else if (userNumber > number + 5) {
    document.querySelector('#status').textContent = 'Too High';
    chances--;
    DisplayChances(chances)
    return
  } else if (userNumber > number) {
    document.querySelector('#status').textContent = 'High';
    chances--;
    DisplayChances(chances)
    return
  } else if (userNumber < number - 5) {
    document.querySelector('#status').textContent = 'Too Low';
    chances--;
    DisplayChances(chances)
    return
  } else if (userNumber < number) {
    document.querySelector('#status').textContent = 'Low';
    chances--;
    DisplayChances(chances)
    return
  }
  console.log("print")
};

function Check() {
  const userNumber = Number(document.querySelector('#check-holder').value); // From interface we receive strings, Number function is used to convert to number
  document.querySelector('#check-holder').value = '';
  if (!userNumber && userNumber === 0) {
    document.querySelector('#status').textContent = 'Enter Valid Number'; // If no input
  } else {
    highLow(userNumber, chances, highScore);
  }
}

document.querySelector('#check-button').addEventListener('click', Check);

// );
