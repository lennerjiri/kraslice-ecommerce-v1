<template>
	<div class="body__app__menuContainer">
		<InfoNav />
		<div
			class="body__app__menuContainer__linkContainer"
		>
			<div
				class="body__app__menuContainer__linkContainer__box"
				@mouseleave="hover = false"
				@mouseover="hover = true"
			>
				<router-link
					class="body__app__menuContainer__linkContainer__box__link"
					to="/"
				>
					<img
						src="@/assets/img/pageAssets/logo.png"
						alt=""
						v-if="!hover"
					/>
					<img
						src="@/assets/img/pageAssets/logoPink.png"
						alt=""
						v-if="hover"
					/>
					<p>Domů</p></router-link
				>
			</div>
			<div
				class="body__app__menuContainer__linkContainer__box"
			>
				<router-link
					class="body__app__menuContainer__linkContainer__box__link"
					to="/kosik"
				>
					<font-awesome-icon
						icon="fa-solid fa-basket-shopping"
						class="body__app__menuContainer__linkContainer__box__link__icon"
					/>
					<p>Košík</p></router-link
				>
			</div>
			<div
				class="body__app__menuContainer__linkContainer__box"
			>
				<router-link
					class="body__app__menuContainer__linkContainer__box__link"
					to="/workshopy_a_prodejna"
				>
					<font-awesome-icon
						icon="fa-solid fa-palette"
						class="body__app__menuContainer__linkContainer__box__link__icon"
					/>

					<p>Workshopy a Prodejna</p></router-link
				>
			</div>
			<div
				class="body__app__menuContainer__linkContainer__box"
			>
				<router-link
					class="body__app__menuContainer__linkContainer__box__link"
					to="/o_malirce"
				>
					<font-awesome-icon
						icon="fa-solid fa-user"
						class="body__app__menuContainer__linkContainer__box__link__icon"
					/>
					<p>O Malířce</p></router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
import InfoNav from '@/components/infoPage/InfoNav.vue';
export default {
	name: 'Menu',
	components: {
		InfoNav,
	},
	data() {
		return {
			hover: false,
		};
	},
	methods: {},
	computed: {},
	mounted() {
		window.addEventListener('resize', () => {
			this.windowWidth = window.innerWidth;

			if (
				this.windowWidth > 1050 &&
				this.$route.path == '/menu'
			) {
				this.$router.push({name: 'Home'});
			}
		});
	},
};
</script>
