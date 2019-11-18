// import Swiper from 'swiper';
import initMenu from './menu.js';

import IndexPage from './pages/index-page.js';

initMenu();

const indexPage = new IndexPage();

indexPage.init();


const galleryThumbSlider = new Swiper('.card-main__gallery-thumbs', {
    slidesPerView: 4,
    // freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2.8,
        },
        760: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 4
        }

    }
});

const gallerySlider = new Swiper('.card-main__gallery-container', {
    thumbs: {
        swiper: galleryThumbSlider
    },
    navigation: {
        nextEl: '.card-main__thubmbs-button--next',
        prevEl: '.card-main__thubmbs-button--prev',
    },
});


//Product-card page
if (document.body.dataset.page === 'product-card') {
    const cardMainTitle = document.querySelector('.card-main__character-title');
    const cardMainSize = document.querySelector('.card-main__character-title--size');
    const cardActiveLabel = document.querySelector('.card-main__character-title--active');

    const cardMainList = document.querySelector('.card-main__character-list');
    const cardMainTable = document.querySelector('.card-main__character-table');

    cardMainSize.addEventListener('click', () => {
        cardMainTitle.classList.remove('card-main__character-title--active');
        cardMainSize.classList.add('card-main__character-title--active');

        cardMainList.classList.remove('card-main__character--active-display');
        cardMainTable.classList.add('card-main__character--active-display');
    })

    cardMainTitle.addEventListener('click', () => {
        cardMainSize.classList.remove('card-main__character-title--active');
        cardMainTitle.classList.add('card-main__character-title--active');

        cardMainTable.classList.remove('card-main__character--active-display');
        cardMainList.classList.add('card-main__character--active-display');
    })
}