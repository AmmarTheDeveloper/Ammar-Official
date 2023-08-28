const searchIcon = document.querySelector('.search-icon'),
    search = document.querySelector('.search'),
    navbarMenuBtn = document.querySelector('.navbar button'),
    MenuLinks = document.querySelector('.menu-links'),
    navLinks = document.querySelector('.nav-links'),
    sideBarMenuBtn = document.querySelector('.menu-btn'),
    sidebar = document.querySelector('.sidebar');

searchIcon.onclick = () => {
    search.classList.toggle('active');
}

navbarMenuBtn.onclick = () => {
    MenuLinks.classList.toggle('active');
}
sideBarMenuBtn.onclick = ()=>{
    sidebar.classList.toggle('active');
    sideBarMenuBtn.classList.toggle('active');
}
window.onclick = (e) => {

    if (e.target != searchIcon && e.target != searchIcon.querySelector('i') && e.target != search && e.target != search.querySelector('input')) {
        search.classList.remove('active');
    }
    if(e.target != navbarMenuBtn){
        MenuLinks.classList.remove('active');
    }

}
window.onscroll = ()=>{
    MenuLinks.classList.remove('active');
}