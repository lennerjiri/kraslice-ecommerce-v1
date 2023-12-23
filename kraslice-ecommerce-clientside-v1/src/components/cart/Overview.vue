<template>
	<aside
		class="body__app__cartContainer__detailCard__priceSummary"
		v-if="
			overallQuantity != 0 &&
			this.$store.state.items.length != 0
		"
	>
		<h2>Přehled</h2>
		<div
			class="body__app__cartContainer__detailCard__priceSummary__detailContainer"
		>
			<p>{{ quantityString }}:</p>
			<p>
				{{ price - $store.state.shippingPrice }}Kč
			</p>
		</div>
		<div
			class="body__app__cartContainer__detailCard__priceSummary__detailContainer"
		>
			<p>Doprava:</p>
			<p>50Kč</p>
		</div>
		<div
			class="body__app__cartContainer__detailCard__priceSummary__separator"
		></div>
		<div
			class="body__app__cartContainer__detailCard__priceSummary__detailContainer"
		>
			<p>Celkem:</p>
			<p>{{ price }}Kč</p>
		</div>
		<router-link
			to="/kosik/formular"
			class="body__app__cartContainer__detailCard__priceSummary___orderButton"
		>
			OBJEDNAT
		</router-link>
	</aside>
</template>

<script>
export default {
	name: 'Overview',
	computed: {
		// calculate the overall price
		price() {
			let fullPrice = this.$store.state.shippingPrice;
			for (const cartItem of this.$store.state.cart) {
				for (const item of this.$store.state
					.items) {
					if (item._id === cartItem._id) {
						fullPrice +=
							cartItem.quantity * item.price;
					}
				}
			}
			return fullPrice;
		},
		// calculate the the number of items
		overallQuantity() {
			let overallQuantity = 0;
			for (const cartItem of this.$store.state.cart) {
				overallQuantity += cartItem.quantity;
			}
			return overallQuantity;
		},
		// quantity string
		quantityString() {
			if (
				this.overallQuantity == 0 ||
				this.overallQuantity >= 5
			) {
				return `${this.overallQuantity} Položek`;
			} else if (this.overallQuantity == 1) {
				return `1 Položka`;
			} else {
				return `${this.overallQuantity} Položky`;
			}
		},

		quantity: {
			get: function () {
				for (const cartItem of this.$store.state
					.cart) {
					if (cartItem._id === this.item._id) {
						return cartItem.quantity;
					}
				}
			},
			set: function (change) {
				this.$store.dispatch('addToCart', {
					_id: this.item._id,
					quantity: change,
				});
			},
		},
	},
};
</script>
