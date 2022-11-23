// Navigation menu
const menu = document.querySelector('.menu-icon');
const ul = document.querySelector('.nav-menu');
const crossIcon = document.querySelector('times');
const mobileMenu = document.querySelectorAll('.mobile-menu');
let menuState = false;

function toggleMenu() {
  if (menuState) {
    ul.classList.remove('df');
    menuState = false;
  } else {
    ul.classList.add('df');
    menuState = true;
  }
}
menu.addEventListener('click', toggleMenu);
mobileMenu.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});
crossIcon.addEventListener('click', toggleMenu);
