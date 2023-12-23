<template>
	<div class="body__app__failedContainer">
		<div class="body__app__failedContainer__box">
			<div>
				<img
					src="@/assets/img/pageAssets/close.png"
					alt=""
				/>
				<h2>Chyba!</h2>
			</div>

			<p>
				Došlo k chybě při odesílání obejdnávky,
				zkuste to prosím znovu!
			</p>
			<!-- link domů -->
			<router-link
				to="/kosik"
				class="body__app__failedContainer__box__chip"
			>
				ZPĚT DO KOŠÍKU
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Failed',
};
</script>
