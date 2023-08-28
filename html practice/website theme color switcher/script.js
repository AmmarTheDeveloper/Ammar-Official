const nav = document.querySelector('.nav'),
      menuBar = document.querySelector('.icon.bar'),
      changer = document.querySelector('.painting'),
      colorContainer = document.querySelector('.colors'),
      colors = document.querySelectorAll('.color'),
      downArrow = document.querySelector('.down'),
      DarkLight = document.querySelector('.dark'),
      root = document.querySelector(':root');
menuBar.onclick = ()=>{
    nav.classList.toggle('active');
    menuBar.classList.toggle('active');
}
    changer.onclick = ()=>{
        colorContainer.classList.toggle('active');
        downArrow.classList.toggle('active');
    }
colors.forEach(color=>{
    color.onclick = (e)=>{
        let target = e.target;
        let active = document.querySelector('.colors.active');
        if(active){
            active.classList.remove('active')
            downArrow.classList.remove('active');
        }
        document.querySelector('.color.active').classList.remove('active');
        target.classList.add('active');
       let dataColor = target.getAttribute('data-color'),
        ActualColor = dataColor.split(" ");
        root.style.setProperty('--color' , ActualColor[0]);
        root.style.setProperty('--bgColor' , ActualColor[1]);
    }
})
DarkLight.onclick = ()=>{
    let ColorElement = document.querySelector('.color.active').getAttribute('data-color'),
        Color = ColorElement.split(" ");
   if(DarkLight.classList.contains('fa-moon')){
        DarkLight.classList.replace('fa-moon' , 'fa-sun');
        root.style.setProperty("--color", 'black');
        root.style.setProperty('--bgColor', 'rgba(0,0,0,0.5)')
   }
   else{
    DarkLight.classList.replace('fa-sun' , 'fa-moon');
        root.style.setProperty('--color' , Color[0]);
        root.style.setProperty('--bgColor' , Color[1]);
   }
}