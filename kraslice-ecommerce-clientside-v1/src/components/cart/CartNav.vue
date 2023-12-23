<template>
	<div class="body__app__cartContainer__goBackNav">
		<div
			@click="goBack()"
			class="body__app__cartContainer__goBackNav__back"
		>
			ZPĚT
		</div>
	</div>
</template>

<script>
export default {
	name: 'CartNav',
	methods: {
		goBack() {
			this.$router.go(-1);
		},
	},
};
</script>
