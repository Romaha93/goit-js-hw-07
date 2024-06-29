'use strict';

const changeBtn = document.querySelector('.change-color');
const valueColor = document.querySelector('.color');
const boxColor = document.querySelector('.widget');

changeBtn.addEventListener('click', hendlerClick);

function hendlerClick() {
  boxColor.style.backgroundColor = `${getRandomHexColor()}`;
  valueColor.textContent =  boxColor.style.backgroundColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};




