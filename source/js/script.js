const buttonTrigger = document.querySelector('.menu-controll');
const header = document.querySelector('.header');
const menu = document.querySelector('.categories-menu');

const category = menu.querySelector('.categories-menu__link--mobile');
const categoryMenu = menu.querySelector('.categories-menu__list-inner');

buttonTrigger.addEventListener('click', () => {
    header.classList.toggle('header--open-menu');
    menu.classList.toggle('categories-menu--open');
})

category.addEventListener('click', (evt) => {
    evt.preventDefault();
    categoryMenu.classList.toggle('categories-menu__list-inner--open');
})

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 7,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });