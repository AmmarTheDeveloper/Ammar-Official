const search = document.querySelector('.input-search');
const images = document.querySelectorAll('.images .box');
const body = document.querySelector('body');
let searcherror = document.querySelector('.search-error');
let error = document.querySelector('.error');
search.addEventListener('keyup' , e=>{
    if(e.key == 'Enter'){
        let searchvalue = search.value,
            value = searchvalue.toLowerCase();
            images.forEach(image =>{
                if(value === image.dataset.name || value === image.dataset.name2){
                 return  image.style.display = "block";
                }
                else{
                    error.style.display="block";
                }
                image.style.display = "none";
            });
    }
});
search.onkeyup = ()=>{
    if(search.value != "") return;
    images.forEach(image =>{
        image.style.display = "block";
        body.classList.remove('active');
    })
}