const search = document.querySelector('.search');
const images = document.querySelectorAll('.box');
const error = document.querySelector('.error');
const span = document.querySelector('.error2');
search.addEventListener('input', () => {
    images.forEach(image => {
        let searchvalue = search.value;
        let value = searchvalue.toLowerCase();
        image.style.display = "none";
        if (search.value === "") {
            image.style.display = "block";
        }
        if (image.getAttribute('data-name') == value || image.getAttribute('data-name2') == value) {
            image.style.display = "block";

        }
    });

});
// search.addEventListener('keyup', e => {
//     let searchvalue = search.value;
//     let value = searchvalue.toLowerCase();
//     span.innerText = searchvalue;
//     if (e.key === 'Enter'){
//         images.forEach(image =>{ 
//           if(image.getAttribute('data-name') !== value || image.getAttribute('data-name2') !== value){
//                 error.style.display = "block";
//             }
//         })
//     }
// })