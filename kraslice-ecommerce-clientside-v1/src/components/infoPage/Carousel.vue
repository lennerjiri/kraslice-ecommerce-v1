<template>
	<div
		class="body__app__detailContainer__detailCard__imgCarousel"
	>
		<img
			v-if="this.itemData && this.itemData['imgs']"
			:src="`https://kraslicelennerova.cz/public/img/${
				this.itemData.imgs[this.imgIndex]
			}`"
			alt=""
		/>

		<img
			v-if="!this.itemData || !this.itemData['imgs']"
			src="@/assets/img/itemImg/white-image.png"
			alt=""
		/>

		<div
			class="body__app__detailContainer__detailCard__imgCarousel__button"
			@click="changeImg(-1)"
			v-if="this.imgArrIf"
		>
			<font-awesome-icon
				icon="fa-solid fa-angle-left"
			/>
		</div>

		<div
			class="body__app__detailContainer__detailCard__imgCarousel__button"
			@click="changeImg(1)"
			v-if="this.imgArrIf"
		>
			<font-awesome-icon
				icon="fa-solid fa-angle-right"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Carousel',
	props: {
		itemData: Object,
	},
	data() {
		return {
			imgIndex: 0,
		};
	},

	methods: {
		changeImg(change) {
			if (
				this.imgIndex + change >
				this.itemData.imgs.length - 1
			) {
				this.imgIndex = 0;
			} else if (this.imgIndex + change < 0) {
				this.imgIndex =
					this.itemData.imgs.length - 1;
			} else {
				this.imgIndex += change;
			}
		},
	},
	computed: {
		imgArrIf() {
			if (this.itemData) {
				return this.itemData.imgs.length > 1;
			} else {
				return false;
			}
		},
	},
};
</script>
