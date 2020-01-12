import $ from 'jquery';

const buttonTrigger = $('.menu-controll');
const header = $('.header');
const menu = $('.categories-menu');

const category = $('.categories-menu__link--mobile');
const categoryMenu = $('.categories-menu__list-inner');


const initMenu = () => {

    buttonTrigger.click(() => {
        header.toggleClass('header--open-menu');
        menu.toggle(400);
    })

    category.click((evt) => {
        evt.preventDefault();
        categoryMenu.slideToggle();
        $('.categories-menu__tablet-wrap').toggleClass('categories-menu__tablet-wrap--open');
    })

    
};

export default initMenu;