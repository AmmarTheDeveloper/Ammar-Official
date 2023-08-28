const myForm = document.querySelector('.myform'),
      error = myForm.querySelector('.error');

myForm.onsubmit = (e)=>{
    e.preventDefault();
    let fname = document.getElementById('fname').value.trim(),
        lname = document.getElementById('lname').value.trim(),
        email = document.getElementById('email').value.trim(),
        number = document.getElementById('phone').value.trim(),
        message = document.getElementById('message').value.trim();
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
       let invalid = true;

        if(fname.length < 2 || lname.length < 2 || !email.match(regex) || message.length < 2){
            invalid = true;
        }else{
            invalid = false;
        }

        let startNumber = number.slice(0 , 1);
        if(startNumber == 0 || startNumber.length < 10 || startNumber.length > 10){
            invalid = true;
        }else{
            invalid = false;
        }
        if(invalid){
            error.innerHTML = 'Please fill all fields correctly';
        }else{
            error.innerHTML = '';
        }

}