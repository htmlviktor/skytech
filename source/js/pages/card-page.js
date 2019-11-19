import Swiper from 'swiper';
import $ from 'jquery';


export default class CardPage {
    init() {
        this._initializeSliders();
        this._initialDom();
    }

    _initializeSliders() {
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
        new Swiper('.card-main__gallery-container', {
            thumbs: {
                swiper: galleryThumbSlider
            },
            navigation: {
                nextEl: '.card-main__thubmbs-button--next',
                prevEl: '.card-main__thubmbs-button--prev',
            },
        });
    }

    _initialDom() {
        const cardMainTitle = $('.card-main__character-title');
        const cardMainList = $('.card-main__character-list');
        const cardMainTable = $('.card-main__character-table');

        cardMainTitle.click(() => {
            cardMainTitle.toggleClass('card-main__character-title--active');
            cardMainTable.toggleClass('card-main__character--active-display');
            cardMainList.toggleClass('card-main__character--active-display');
        });
    }
}