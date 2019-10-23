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

const swiper = new Swiper('.bestsellers__slider', {
    slidesPerView: 6.2,
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    slidesOffsetBefore: 200,
    slidesOffsetAfter: 200,
});

const swiperTwo = new Swiper('.special-offer__slider-inizialize', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 30,
})
