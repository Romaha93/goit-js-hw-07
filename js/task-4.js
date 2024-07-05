'use strict';

const thisForm = document.querySelector(".login-form");

thisForm.addEventListener('submit', hendlerLogin);

function hendlerLogin(event) {
    
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    
    const dataForm = {
        
        email: email.value.trim(),
        password: password.value.trim(),
    
    };

    event.currentTarget.reset();
    
    if (dataForm.email.length <= 0 || dataForm.password.length <= 0) {
        
        return alert('All form fields must be filled in');
    
    } else {
        
        return console.log(dataForm);
    
    };

};
