<template>
	<div id="app">
		<!-- Nav -->
		<Navigation />
		<!--Router-->
		<router-view />
		<!-- Footer -->
		<Footer />
	</div>
</template>
<script>
// Top Nav
import Navigation from '@/components/app/Navigation.vue';
// Bottom Footer
import Footer from '@/components/app/Footer.vue';
export default {
	name: 'App',
	components: {
		Navigation,
		Footer,
	},
	// Initialize all egg tags and quantities from the api items
	methods: {
		initFilterEggs() {
			const eggTypes =
				this.$store.state.filterEggTypesAll;
			for (const item of this.$store.state.items) {
				for (const type of item.eggType) {
					if (!eggTypes.includes(type)) {
						this.$store.commit(
							'updatefilterEggTypesAll',
							type
						);
					}
				}
			}
		},
		initFilterQuantity() {
			for (const item of this.$store.state.items) {
				if (
					!this.$store.state.filterPackageQuantityOn.includes(
						item.packageQuantity
					)
				) {
					this.$store.dispatch(
						'updateFilterPackageQuantityOn',
						item.packageQuantity
					);
				}
			}
		},
		checkLiked() {
			const liked = [...this.$store.state.liked];

			for (const likedId of this.$store.state.liked) {
				let flag = false;
				for (const item of this.$store.state
					.items) {
					if (likedId == item._id) {
						flag = true;
					}
				}

				if (flag) {
					continue;
				}
				liked.splice(liked.indexOf(likedId), 1);
			}

			this.$store.commit('removeLike', liked);
		},
		checkCart() {
			const cart = [...this.$store.state.cart];

			for (const cartItem of this.$store.state.cart) {
				let flag = false;
				for (const item of this.$store.state
					.items) {
					if (cartItem._id == item._id) {
						flag = true;
					}
				}

				if (flag) {
					continue;
				}
				cart.splice(cart.indexOf(cartItem), 1);
			}
			this.$store.commit('removeCart', cart);
		},
	},

	// run both methods before the page gets rendered
	async created() {
		await this.$store.dispatch('getItems');
		this.initFilterEggs();
		this.initFilterQuantity();
		this.checkLiked();
		this.checkCart();
	},
};
</script>
