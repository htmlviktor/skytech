import initMenu from './menu.js';
import Modals from './modals.js';
import lozad from 'lozad';

import IndexPage from './pages/index-page.js';
import CardPage from './pages/card-page.js';
import DeliveryPage from './pages/delivery-page.js';
import PaymentsPage from './pages/payments-page.js';
import FavoritesPage from './pages/favorites-page';
import Favorites from './favorites';

const favorites = new Favorites();
const modalsInit = new Modals();

const indexPage = new IndexPage();
const cardPage = new CardPage();
const deliveryPage = new DeliveryPage();
const paymentsPage = new PaymentsPage();
const favoritesPage = new FavoritesPage();

indexPage.init();
cardPage.init();
deliveryPage.init();
paymentsPage.init();
favoritesPage.init();

modalsInit.init();
initMenu();

favorites.init();

const observer = lozad();

observer.observe();