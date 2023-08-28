let egCode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
let button =  document.querySelector('button');
let img = document.querySelector('img');
let imgContainer = document.querySelector('.img');
button.onclick = ()=>{
    let userInput = document.querySelector('input').value.trim();
    if(userInput.length <= 0){
        alert('please fill text or URL  proplery');
        img.src = '';
        imgContainer.classList.remove('active');
    }else{
        let qrCode = `${egCode}${userInput}`;
        img.src = qrCode;
        imgContainer.classList.add('active');
    }

}