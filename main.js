
// toggle header menu
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', function() {
    console.log('clicked');
  menu.classList.toggle('show');
});
