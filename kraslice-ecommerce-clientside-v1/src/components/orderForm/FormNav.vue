<template>
	<div class="body__app__orderContainer__goBackNav">
		<router-link
			:to="{name: 'Cart'}"
			class="body__app__cartContainer__goBackNav__back"
		>
			ZPĚT
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'FormNav',
};
</script>

<style></style>
