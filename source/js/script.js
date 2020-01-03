import initMenu from './menu.js';
import Modals from './modals.js';

import IndexPage from './pages/index-page.js';
import CardPage from './pages/card-page.js';
import DeliveryPage from './pages/delivery-page.js';
import PaymentsPage from './pages/payments-page.js';

const modalsInit = new Modals();
modalsInit.init();
initMenu();

const indexPage = new IndexPage();
const cardPage = new CardPage();
const deliveryPage = new DeliveryPage();
const paymentsPage = new PaymentsPage();

indexPage.init();
cardPage.init();
deliveryPage.init();
paymentsPage.init();


