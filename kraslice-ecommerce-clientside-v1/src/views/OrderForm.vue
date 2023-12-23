<template>
	<div class="body__app__orderContainer">
		<FormNav />
		<Form />
		<div
			class="body__app__orderContainer__bottomSpace"
		></div>
	</div>
</template>

<script>
import FormNav from '@/components/orderForm/FormNav.vue';
import Form from '@/components/orderForm/Form.vue';

export default {
	name: 'OrderForm',
	components: {
		FormNav,
		Form,
	},
	mounted() {
		if (this.$store.state.cart.length == 0) {
			this.$router.push({name: 'Home'});
		}
	},
};
</script>

<style></style>
