import initMenu from './menu.js';
import Search from './search.js';
import Modals from './modals.js';
import lozad from 'lozad';

import IndexPage from './pages/index-page.js';
import CardPage from './pages/card-page.js';
import DeliveryPage from './pages/delivery-page.js';
import PaymentsPage from './pages/payments-page.js';
import FavoritesPage from './pages/favorites-page.js';
import Favorites from './favorites.js';
import SearchPage from './pages/search-page.js'

import {ajaxInit} from './APImodal';

const favorites = new Favorites();
const modalsInit = new Modals();
const searchModal = new Search();

const indexPage = new IndexPage();
const cardPage = new CardPage();
const deliveryPage = new DeliveryPage();
const paymentsPage = new PaymentsPage();
const favoritesPage = new FavoritesPage();
const searchPage = new SearchPage();

indexPage.init();
cardPage.init();
deliveryPage.init();
paymentsPage.init();
favoritesPage.init();
searchPage.init();

modalsInit.init();
initMenu();


favorites.init();
searchModal.init();

const observer = lozad();

observer.observe();


ajaxInit();