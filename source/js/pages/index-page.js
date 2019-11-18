import Swiper from 'swiper';


export default class IndexPage {
    init() {
        this._initializeSliders();
    }

    _initializeSliders() {
        new Swiper('.main-slider--swiper', {
            simulateTouch: false,
            // autoplay: {
            //     delay: 5000
            // },
            pagination: {
                el: '.main-slider__controlls',
                bulletClass: 'main-slider__controlls-btn',
                bulletActiveClass: 'main-slider__controlls-btn--active',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<button class="' + className + '">' + (index + 1) + '</button>';
                },
            },
        });
        new Swiper('.bestsellers__slider', {
            scrollbar: {
                el: '.bestsellers__slider-scrollbar',
                hide: false,
                lockClass: 'ds',
                dragClass: 'bestsellers__slider-scrollbar-drag',
                dragSize: 50,
                draggable: true
            },
            breakpoints: {
                1440: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
                1100: {
                    slidesPerView: 4.6,
                    spaceBetween: 20,
                },
                760: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1.3,
                    spaceBetween: 20,
                    centeredSlides: true,
                    loop: true
                }
            }
        });
        new Swiper('.special-offer__slider-inizialize', {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.special-offer__btn--next',
                prevEl: '.special-offer__btn--prev',
            },
            breakpoints: {
                1440: {
                    spaceBetween: 30,
                    slidesPerView: 4,
                    // slidesPerColumn: 2
                },
                1100: {
                    slidesPerView: 4,
                },
                760: {
                    slidesPerView: 2.5,
                },
                320: {
                    slidesPerView: 1.3,
                    centeredSlides: true,
                    loop: true
                }
            }
        });
        new Swiper('.reviews__slider', {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 20,
            navigation: {
                nextEl: '.reviews__btn--next',
                prevEl: '.reviews__btn--prev',
            },
            breakpoints: {
                1400: {
                    slidesPerView: 3,
                },
                1100: {
                    slidesPerView: 3,
                },
                760: {
                    slidesPerView: 1.8
                },
                320: {
                    slidesPerView: 1
                }
            }
        });
        new Swiper('.about-company__slider', {
            slidesPerView: 'auto',
            spaceBetween: -80,
            loop: true,
            navigation: {
                nextEl: '.about-company__btn--next',
                prevEl: '.about-company__btn--prev',
            },
            breakpoints: {
                760: {
                    slidesPerView: 'auto',
                    spaceBetween: -80,
                },
                1100: {
                    spaceBetween: -40,
                },
                1400: {
                    spaceBetween: -80,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        })
        new Swiper('.employers__slider', {
            slidesPerView: 5.3,
            spaceBetween: 20,
            scrollbar: {
                el: '.employers__slider-scrollbar',
                hide: false,
                lockClass: 'ds',
                dragClass: 'employers__slider-scrollbar-drag',
                dragSize: 50,
                draggable: true
            },
            breakpoints: {
                1400: {
                    slidesPerView: 4.8,
                },
                1100: {
                    slidesPerView: 4.3,
                },
                760: {
                    slidesPerView: 1.8,
                },
                320: {
                    slidesPerView: 1
                }
            }
        })
    }
}