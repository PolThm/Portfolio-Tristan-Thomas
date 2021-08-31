const burger = document.querySelector('.burger i');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar-container');

const toggleNav = () => {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    menu.classList.toggle('menu--active');
}

const openPdf = (pdf) => {
    window.open(pdf);
}

const closeMobileMenu = () => {
    menu.classList.remove('menu--active');
}

const goToAnchor = (anchor) => {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const loc = document.location.toString().split('#')[0];

    if (windowWidth < 576) {
        burger.classList.toggle('fa-bars');
        burger.classList.toggle('fa-times');
    }
    closeMobileMenu()
    document.location = loc + '#' + anchor;
}

window.onscroll = () => {
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 20 ) {
        navbar.classList.add('navbar-container--on-scroll');
    } else {
        navbar.classList.remove('navbar-container--on-scroll');
    }
};