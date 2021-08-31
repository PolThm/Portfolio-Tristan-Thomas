const burger = document.querySelector('.burger i');
const menu = document.querySelector('.menu');

const toggleNav = () => {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    menu.classList.toggle('menu--active');
}

const openPdf = (pdf) => {
    window.open(pdf);
}

const goToAnchor = (anchor) => {
    menu.classList.remove('menu--active');
    const loc = document.location.toString().split('#')[0];
    document.location = loc + '#' + anchor;
}