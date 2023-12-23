<template>
	<div
		class="body__app__cartContainer__detailCard__cartItems"
		:class="{
			body__app__cartContainer__detailCard__cartItems___off:
				overallQuantity == 0 ||
				this.$store.state.items.length == 0,
		}"
	>
		<h2>Košík</h2>
		<FailedMessage :overallQuantity="overallQuantity" />
		<!-- <div>
					<p
						v-if="overallQuantity == 0"
						class="body__app__cartContainer__detailCard__cartItems___empty"
					>
						Prázdný košík!
					</p>
				</div> -->
		<ItemCart
			v-for="(item, i) of this.$store.state.cart"
			:key="i"
			:item="item"
		/>
	</div>
</template>

<script>
import ItemCart from '@/components/cart/ItemCart.vue';
import FailedMessage from '@/components/cart/FailedMessage.vue';

export default {
	name: 'CartTable',
	components: {
		ItemCart,
		FailedMessage,
	},
	computed: {
		overallQuantity() {
			let overallQuantity = 0;
			for (const cartItem of this.$store.state.cart) {
				overallQuantity += cartItem.quantity;
			}
			return overallQuantity;
		},
	},
};
</script>
