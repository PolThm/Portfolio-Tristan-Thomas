// Selection of HTML objects
const burger = document.querySelector('.burger i');
const menu = document.querySelector('.menu');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    menu.classList.toggle('menu--active');
}

// Calling the function after click event occurs
burger.addEventListener('click', () => {
    toggleNav();
});