import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

// presistance
const vuexLocal = new VuexPersistence({
	key: 'krasliceLennerova',
	storage: window.localStorage,
	reducer: state => ({
		cart: state.cart,
		liked: state.liked,
	}),
});

export default new Vuex.Store({
	plugins: [vuexLocal.plugin],
	state: {
		// cat filter right selectore
		itemSelection: {
			sortAndFilter: false,
			liked: false,
		},
		// cat filter left selectors
		groups: {
			all: {status: true, name: 'VŠE', cat: 'all'},
			eggs: {
				status: false,
				name: 'VAJÍČKA',
				cat: 'eggs',
			},
			sets: {
				status: false,
				name: 'KOŠÍKY',
				cat: 'sets',
			},
		},
		// page controllers =
		page: 1,
		liked: [], // presist
		quantityIndex: 0,

		// filters
		/// eggs
		filterEggTypesOn: [],
		filterEggTypesAll: [],
		/// package quantity
		filterPackageQuantityOn: [],
		/// price
		sortPriceOn: '',

		// cart
		cart: [],
		shippingPrice: 50,
		orderedSuccess: false,
		orderedFailed: false,

		// Shop items
		items: [],
	},
	mutations: {
		// cat filter right selection
		changeItemSelection(state, property) {
			state.itemSelection[property.property] =
				property.propertyState;
		},
		// cat filter left selection
		changeCategory(state, property) {
			state.groups[property.name].status =
				property.status;
		},
		// update current page
		updatePageNumber(state, page) {
			state.page = page;
		},

		// filters
		/// Eggs
		updatefilterEggTypesAll(state, type) {
			state.filterEggTypesAll.push(type);
		},
		// Quantity
		updateQuantityIndex(state, value) {
			state.quantityIndex += value;
		},
		// Sorting
		updateSorting(state, sortOrder) {
			state.sortPriceOn = sortOrder;
		},
		// Like or dislike item
		updateLiked(state, _id) {
			if (state.liked.includes(_id)) {
				const index = state.liked.indexOf(_id);
				state.liked.splice(index, 1);
			} else {
				state.liked.push(_id);
			}
		},
		// remove from cart
		removeFromCart(state, _id) {
			for (const item of state.cart) {
				if (item._id === _id) {
					state.cart.splice(
						state.cart.indexOf(item),
						1
					);
				}
			}
		},
		// add to cart
		addToCartAdditionally(state, data) {
			state.cart[data.index].quantity +=
				data.quantity;
		},
		addToCartFirst(state, data) {
			state.cart.push(data);
		},
		// clear cart
		cleanCart(state) {
			state.cart = [];
		},
		// order -> enable access to successful order

		// order -> enable access to failed order

		// remove like when liked item was removed by the admin
		removeLike(state, data) {
			state.liked = data;
		},
		removeCart(state, data) {
			state.cart = data;
		},
		uploadItems(state, items) {
			state.items = items.data.eggs;
		},
	},
	actions: {
		// Filters
		/// Quantity
		updateFilterPackageQuantityOn(context, quantity) {
			context.state.filterPackageQuantityOn.push(
				quantity
			);

			context.state.filterPackageQuantityOn =
				context.state.filterPackageQuantityOn
					.sort()
					.filter(value => {
						if (value == 'vše') {
							return false;
						} else {
							return true;
						}
					});

			context.state.filterPackageQuantityOn.unshift(
				'vše'
			);
		},
		/// Eggs (list with the selected eggs)
		updatefilterEggTypesOn(context, egg) {
			if (
				context.state.filterEggTypesOn.includes(egg)
			) {
				const eggIndex =
					context.state.filterEggTypesOn.indexOf(
						egg
					);
				context.state.filterEggTypesOn.splice(
					eggIndex,
					1
				);
			} else {
				context.state.filterEggTypesOn.push(egg);
			}
		},
		// add item to cart (with values / or without)
		addToCart(context, data) {
			// check if the item is already in cart
			for (const [
				i,
				item,
			] of context.state.cart.entries()) {
				if (
					data._id === item._id &&
					context.state.cart[i].quantity +
						data.quantity <=
						100 &&
					context.state.cart[i].quantity +
						data.quantity >
						0
				) {
					context.commit(
						'addToCartAdditionally',
						{index: i, quantity: data.quantity}
					);
					return;
				}
			}

			if (
				context.state.items.find(
					item => item._id == data._id
				) &&
				!context.state.cart.find(
					item => item._id == data._id
				)
			) {
				// otherwise -> if the item is not yet in cart
				context.commit('addToCartFirst', data);
			}
		},
		async getItems(context) {
			const dataObj = await fetch(
				'https://kraslicelennerova.cz/api/v1/eggs',
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			context.commit(
				'uploadItems',
				await dataObj.json()
			);
		},
	},
	modules: {},
});
