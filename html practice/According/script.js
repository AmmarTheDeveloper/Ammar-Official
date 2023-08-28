const icons = document.querySelectorAll('.icon');
const accordins = document.querySelectorAll('.accordin');
const headings = document.querySelectorAll('h1');
headings.forEach(heading =>{
    heading.onclick = ()=>{
        let accordin = heading.parentElement;
        let icon = heading.children[0];
        if(icon.classList.contains('fa-plus')){
            icon.classList.replace('fa-plus','fa-minus');
            accordins.forEach(accord=>{
                if(accord.classList.contains('active')){
                    accord.classList.remove('active');
                    accord.querySelector('h1').children[0].classList.replace('fa-minus','fa-plus')
                }
            })
            accordin.classList.add('active');
        }else{
            icon.classList.replace('fa-minus','fa-plus');
            accordin.classList.remove('active');
        }
    }
    })