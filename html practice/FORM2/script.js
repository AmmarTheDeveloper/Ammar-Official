let form = document.querySelector('form');
let nameInput;
    form.onsubmit = ()=>{
        let mailInput = document.querySelector('.email-input').value;
        let passwordInput = document.querySelector('.password-input').value;
        nameInput = document.querySelector('.name-field').value;
    }