<template>
	<div
		class="body__app__cartContainer__detailCard__cartItems___empty"
		v-if="
			overallQuantity == 0 ||
			this.$store.state.items.length == 0
		"
	>
		<img
			src="@/assets/img/pageAssets/warning.png"
			alt=""
		/>

		<h2>{{ cartMessage }}</h2>
	</div>
</template>

<script>
export default {
	name: 'FailedMessage',
	props: {
		overallQuantity: Number,
	},
	computed: {
		cartMessage() {
			if (this.$store.state.items.length == 0) {
				return 'Chyba při nahrávání položek, prosím zkuste otevřít stránku znovu!';
			} else if (this.overallQuantity == 0) {
				return 'Prázdný košík!';
			}
		},
	},
};
</script>
