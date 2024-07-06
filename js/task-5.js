'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const bodyColor = document.querySelector('body')
const changeBtn = document.querySelector('.change-color');
const valueColor = document.querySelector('.color');

changeBtn.addEventListener('click', hendlerClick);

function hendlerClick() {
  bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  valueColor.textContent =  bodyColor.style.backgroundColor;
};





