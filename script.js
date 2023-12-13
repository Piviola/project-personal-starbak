let menu = document.getElementById('menu-icon');
let navbar = document.getElementsByClassName('navbar');

let navbarOpen = false;

menu.onclick = () => {
    console.log(navbar);
    
    if(!navbarOpen){
        menu.classList.add('bx-x');
        navbar[0].classList.add('active');
        navbar[0].classList.add('navbar-open');
    }else{
        menu.classList.remove('bx-x');
        navbar[0].classList.remove('active');
        navbar[0].classList.remove('navbar-open');
    }

    navbarOpen = !navbarOpen;
}
    

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}