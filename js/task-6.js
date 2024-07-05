'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsBtn = document.querySelector('#controls');
const containerBoxes = document.querySelector('#boxes');

function createBoxes(amount) {
  containerBoxes.innerHTML = '';

  let sizeBox = 30;
  let amountBoxes = [];

  for (let index = 0; index < amount; index++) {
    
    const addBox = document.createElement('div');
    sizeBox += 10;
    addBox.style.width = `${sizeBox}px`;
    addBox.style.height = `${sizeBox}px`;
    addBox.style.backgroundColor = getRandomHexColor();
    amountBoxes.push(addBox);
  
  };
  
  containerBoxes.append(...amountBoxes);
};


const inputValue = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', hendlerClick);

function hendlerClick() {
  
  const amount = inputValue.valueAsNumber;
  
  if (amount > 0 && amount <= 100) {
    
    createBoxes(amount);
    inputValue.value = '';

  };
};

destroyBtn.addEventListener('click', () => 
  
  containerBoxes.innerHTML = ''

);







