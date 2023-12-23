<template>
	<div class="body__app__successContainer">
		<div class="body__app__successContainer__box">
			<div>
				<img
					src="@/assets/img/pageAssets/check.png"
					alt=""
				/>
				<h2>Objednávka úspěšně odeslána!</h2>
			</div>

			<p>
				Podrobnosti objednávky naleznete v emailu!
			</p>
			<!-- link domů -->
			<router-link
				to="/"
				class="body__app__successContainer__box__chip"
			>
				ZPĚT DO OBCHODU
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Success',
	created() {
		this.$store.commit('cleanCart');
	},
};
</script>
