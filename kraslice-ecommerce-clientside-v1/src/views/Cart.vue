<template>
	<div class="body__app__cartContainer">
		<CartNav />
		<div class="body__app__cartContainer__detailCard">
			<CartTable />
			<Overview />
		</div>
		<div
			class="body__app__cartContainer__bottomSpace"
		></div>
	</div>
</template>

<script>
// cart item
import CartNav from '@/components/cart/CartNav.vue';
import Overview from '@/components/cart/Overview.vue';
import CartTable from '@/components/cart/CartTable.vue';

export default {
	name: 'Cart',
	components: {
		CartNav,
		Overview,
		CartTable,
	},
	methods: {},
	computed: {},
};
</script>

<style scoped lang="scss"></style>
