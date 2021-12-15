// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(`scrollY: ${window.scrollY}`);
    console.log(`navbarHeight: ${navbarHeight}`);

    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});