let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu__burger');

burger.addEventListener('click',
function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})