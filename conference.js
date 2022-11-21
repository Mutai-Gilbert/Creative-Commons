// Navigation menu
const menu = document.querySelector('.menu-mobile');
const ul = document.querySelector('.menu-ul');
// const crossIcon = document.querySelector('times');
const mobileMenu = document.querySelectorAll('.menu-li');
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