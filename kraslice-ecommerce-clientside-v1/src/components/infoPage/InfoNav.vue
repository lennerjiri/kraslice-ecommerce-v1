<template>
	<div class="body__app__detailContainer__goBackNav">
		<div
			@click="goBack()"
			class="body__app__detailContainer__goBackNav__back"
		>
			ZPĚT
		</div>
	</div>
</template>

<script>
export default {
	name: 'InfoNav',
	methods: {
		goBack() {
			this.$router.go(-1);
		},
	},
};
</script>
