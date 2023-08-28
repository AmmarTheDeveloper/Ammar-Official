const lengthSlider = document.querySelector('.pas-length .range');
const passlengthtext = document.querySelector('.pas-length .length');
const options = document.querySelectorAll('.option input');
const GenerateBtn = document.getElementById('generate-btn');
const passwordInput = document.querySelector('.password-field');
const passIndicator = document.querySelector('.password-indicator');
const copyIcon = document.querySelector('.copy-icon');
const copied = document.querySelector('.copied');
const characters = {
    Lowercase: "abcdefghijklmnopqrstuvwxyz",
    Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Numbers: "0123456789",
    Symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}
function GeneratePassword(){

    let staticpassword = "",
        passlength = lengthSlider.value,
        randompassword = "",
        duplicate = false;

    options.forEach(option =>{
        if(option.checked){
            if(option.id !== "duplicate" && option.id !=="spaces"){
            staticpassword += characters[option.id];
        }
        else if(option.id === "spaces")
        {
            staticpassword += "  ${staticpassword}  " ;
        }
        else
        {
            duplicate = true;
        }
    }
    });

    for(i=0; i < passlength; i++){
       let randomChar = staticpassword[Math.floor(Math.random() * staticpassword.length)];
        if(duplicate){
            !randompassword.includes(randomChar) || randomChar == " "? randompassword += randomChar : i--;
        }
        else{
            randompassword += randomChar;
        }
    }
    passwordInput.value = randompassword;
}
const updatePassIndicator = ()=>{
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <=16? "mediaum" : "strong";
}
const updateslider = ()=>{
    passlengthtext.innerHTML = lengthSlider.value;
    GeneratePassword();
    updatePassIndicator();
}
const CopyPassword = ()=>{
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace('fa-regular','fa-solid');
    copyIcon.classList.replace('fa-copy' , 'fa-check');
    copied.style.display = "block";
    setTimeout(()=>{
        copyIcon.classList.replace('fa-solid' , 'fa-regular');
        copyIcon.classList.replace('fa-check' , 'fa-copy');
        copied.style.display = "none";
    },1000);
}
updateslider();
GenerateBtn.addEventListener('click' , GeneratePassword);
lengthSlider.addEventListener('input' , updateslider);
copyIcon.addEventListener('click' , CopyPassword);