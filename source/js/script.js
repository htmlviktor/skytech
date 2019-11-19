// import Swiper from 'swiper';
import initMenu from './menu.js';
import $ from 'jquery';

import IndexPage from './pages/index-page.js';
import CardPage from './pages/card-page.js';
import DeliveryPage from './pages/delivery-page.js';

initMenu();

const indexPage = new IndexPage();
const cardPage = new CardPage();
const deliveryPage = new DeliveryPage();


indexPage.init();
cardPage.init();
deliveryPage.init();


