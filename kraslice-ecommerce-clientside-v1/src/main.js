import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// styles
import './assets/scss/styles.scss';

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import {
	faBasketShopping,
	faHeart as faHeartSolid,
	faBoxOpen as faBoxOpenSolid,
	faEgg as faEggSolid,
	faAngleRight as faAngleRightSolid,
	faAngleLeft as faAngleLeftSolid,
	faXmark as faXmarkSolid,
	faPhone as faPhoneSolid,
	faEnvelope as faEnvelopeSolid,
	faSquarePen as faSquarePensolid,
	faPenRuler as faPenRulerSolid,
	faCopyright as faCopyrightSolid,
	faCreditCard as faCreditCardSolid,
	faCoins as faCoinsSolid,
	faPlus as faPlusSolid,
	faMinus as faMinusSolid,
	faBars as faBarsSolid,
	faPalette as faPaletteSolid,
	faUser as faUserSolid,
} from '@fortawesome/free-solid-svg-icons';

import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

/* add icons to the library */
library.add(
	faBasketShopping,
	faHeartRegular,
	faHeartSolid,
	faEggSolid,
	faBoxOpenSolid,
	faAngleRightSolid,
	faAngleLeftSolid,
	faXmarkSolid,
	faPhoneSolid,
	faEnvelopeSolid,
	faSquarePensolid,
	faPenRulerSolid,
	faCopyrightSolid,
	faCreditCardSolid,
	faCoinsSolid,
	faPlusSolid,
	faMinusSolid,
	faBarsSolid,
	faPaletteSolid,
	faUserSolid
);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: function (h) {
		return h(App);
	},
}).$mount('#app');
