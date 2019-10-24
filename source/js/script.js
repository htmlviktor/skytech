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
    navigation: {
        nextEl: '.special-offer__btn--next',
        prevEl: '.special-offer__btn--prev',
      },
});

const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
     navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev',
      },
});

const aboutCompanySlider = new Swiper('.about-company__slider', {
    slidesPerView: 'auto',
    spaceBetween: -80,
    loop: true,
    navigation: {
        nextEl: '.about-company__btn--next',
        prevEl: '.about-company__btn--prev',
      },
})

const employersSlider = new Swiper('.employers__slider', {
    slidesPerView: 5.3,
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
})