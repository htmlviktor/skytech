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

const mainSlider = new Swiper('.main-slider--swiper', {
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

const swiper = new Swiper('.bestsellers__slider', {
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

const swiperTwo = new Swiper('.special-offer__slider-inizialize', {
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.special-offer__btn--next',
        prevEl: '.special-offer__btn--prev',
    },
    breakpoints: {
        1440: {
            spaceBetween: 30,
            slidesPerColumn: 2
        },
        1100: {
            slidesPerView: 2,
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

const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
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

const aboutCompanySlider = new Swiper('.about-company__slider', {
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
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
})

const employersSlider = new Swiper('.employers__slider', {
    slidesPerView: 5.3,
    loop: true,
    spaceBetween: 20,
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

const partnersSlider = new Swiper('.partners__slider', {
    breakpoints: {
        320: {
            slidesPerView: 2.8,
            centeredSlides: true,
            loop: true
        },
        760: {
            slidesPerView: 'auto'
        }
    }
})

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
