// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    // console.log(`scrollY: ${window.scrollY}`);
    // console.log(`navbarHeight: ${navbarHeight}`);

    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    scrollIntoView(link);
});


// Handle click on "contact me" button on home
const homeContactbtn = document.querySelector('.home__contact');

homeContactbtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1.2 - window.scrollY / homeHeight;
});

//
const about = document.querySelector('#about');
const arrow = document.querySelector('#arrow');
const aboutHeight = about.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > aboutHeight/2) {
        arrow.classList.add('arrow');
    } else {
        arrow.classList.remove('arrow');
    }
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', ()=> {
    if(window.scrollY > homeHeight/2){
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', ()=> {
    scrollIntoView('#home');
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : "smooth"})
}