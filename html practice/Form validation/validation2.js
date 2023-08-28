const submit = document.querySelector('.submit');
submit.onclick = ()=>{
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');
const password = document.querySelector('.password');
const ConfirmPassword = document.querySelector('.confirmpassword');
const Email = document.querySelector('.email');
const phoneNo = document.querySelector('.phone-no');
    // getting errors constant
const fnError = document.querySelector('.first-name-error');
const lnError = document.querySelector('.last-name-error');
const pError = document.querySelector('.password-error');
const cpError = document.querySelector('.confirm-password-error');
const eError = document.querySelector('.email-error');
const phError = document.querySelector('.phone-error');
    if(firstName.value == "" ){
        fnError.innerText = "Please Enter First Name";
    }
    else{
        fnError.innerText = "";
    }
    if(lastName.value == "")
        {
        lnError.innerText = "Please Enter Last Name";
    }
    else{
        lnError.innerText = "";
    }
    if(password.value == ""){
        pError.innerHTML = "Please Enter Password";
    }
   else if(password.value.length < 8 || password.value.length > 20){
        pError.innerText = "Your Password Must Be Between 8 to 20 Character";
    }
    else{
        pError.innerText = "";
    }
    if(ConfirmPassword.value == ""){
        cpError.innerHTML = "Please Enter Confirm Password";
    }
    else if(ConfirmPassword.value != password.value){
        cpError.innerHTML = "Confirm Password Not Matched";
    }
    else{
        cpError.innerHTML = "";
    }
     if(Email.value == ""){
        eError.innerText = "Please Enter Email";
    }
    else{
        eError.innerText = "";
    }
     if(phoneNo.value == ""){
        phError.innerText = "Please Enter Phone no";
    }
    else if(phoneNo.value.length < 10 || phoneNo.value.length > 10){
        phError.innerHTML = "Invalid phone no";
    }
    else{
        phError.innerText = "";
    }
    //////main validatoin starts here///////////////////
    if(fnError.innerHTML == "" && lnError.innerText  == ""){
        if(pError.innerText  == "" && cpError.innerText  == ""){
            if(eError.innerText  == "" && phError.innerText == ""){
                const scriptURL = 'https://script.google.com/macros/s/AKfycbzGXIYu3K7IffjPxEEgwPuM9dnWB82vZvp-a_ZQipuHGRYvTE3jHnoaYX5WZBKteyDv/exec';
        const form = document.forms['submit-to-google-sheet'];
        const message = document.querySelector('.message');
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response  = ()=>{
              message.innerText = "Validated successfully!";
              setTimeout( ()=>{
                  message.innerText = "";
                  form.reset();
              },3000);
            })
        })
    }}
    }
    }