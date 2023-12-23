import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import ItemInfo from '../views/ItemInfo.vue';
import NotFound from '../views/NotFound.vue';
import OrderForm from '../views/OrderForm.vue';
import Success from '../views/Success.vue';
import Failed from '../views/Failed.vue';
import Menu from '../views/Menu.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/polozky',
		name: 'Items',
		component: Home,
	},
	{
		path: '/polozky/:_id',
		name: 'ItemInfo',
		component: ItemInfo,
		props: true,
	},
	{
		path: '/kosik',
		name: 'Cart',
		component: Cart,
	},
	{
		path: '/kosik/formular',
		name: 'OrderForm',
		component: OrderForm,
	},
	{
		path: '/kosik/formular/odeslano',
		name: 'Success',
		component: Success,
	},
	{
		path: '/kosik/formular/error',
		name: 'Failed',
		component: Failed,
	},
	{
		path: '/menu',
		name: 'Menu',
		component: Menu,
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
