'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const clsButton = document.querySelector('.close-modal');
const opnmodal = document.querySelectorAll('.show-modal');

for (let i = 0; i < opnmodal.length; i++) {
  opnmodal[i].addEventListener('click', function () {
    modal.classList.value = 'modal';
    overLay.classList.value = 'overlay';
  });
}
clsButton.addEventListener('click', function () {
  modal.classList.value = 'modal hidden';
  overLay.classList.value = 'overlay hidden';
});

document.addEventListener('keydown', function (e) {
  if (modal.classList.value === "modal") {
    if (e.key === 'Escape') {
      modal.classList.value = 'modal hidden';
      overLay.classList.value = 'overlay hidden';
    }
  }
});
