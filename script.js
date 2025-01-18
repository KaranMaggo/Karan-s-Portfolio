let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
            });
        }
    });
    
// sticky navbar

let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);
// remove navbar when click on link 

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};





// toggle icon navbar

let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick=()=>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active')
}


//typed js

// script.js
const options = {
    strings: ["Web Developer!","Wordpress Developer!"],
    typeSpeed: 100, // Speed of typing
    backSpeed: 100, // Speed of deleting
    backDelay: 1000, // Delay before deleting
    loop: true // Loop the animation
};

const typed = new Typed('#typed', options);
