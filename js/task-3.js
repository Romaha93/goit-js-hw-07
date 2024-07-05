'use strict';

const inputName = document.querySelector('#name-input');
const getName = document.querySelector('#name-output')

inputName.addEventListener('input', handlerInput)

function handlerInput(event) {

    if (event.currentTarget.value.length <= 0 || event.currentTarget.value[0] === " ") {
        
        return getName.textContent = "Anonymous";
    
    } else {
        
        return getName.textContent = event.currentTarget.value.trim();
        
    };

};

