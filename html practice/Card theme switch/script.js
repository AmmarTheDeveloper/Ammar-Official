const colors = document.querySelectorAll('.color');
const root = document.querySelector(':root');
colors.forEach(color=>{
    color.onclick = ()=>{
        let theme = document.querySelector('.theme');
        let activeColor = document.querySelector('.color.active');
        activeColor.classList.remove('active');
        let colorValue = color.getAttribute('data-color');
        let colorValues = colorValue.split(" ");
        root.style.setProperty('--mainColor' , colorValues[0]);
        root.style.setProperty('--secColor' , colorValues[1]);
        color.classList.add('active');
    }
})
