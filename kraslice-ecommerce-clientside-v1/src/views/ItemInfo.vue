<template>
	<div class="body__app__detailContainer">
		<InfoNav />
		<div class="body__app__detailContainer__detailCard">
			<Carousel :itemData="itemData" />
			<ItemDetailCard
				:itemData="itemData"
				:_id="_id"
			/>
		</div>
	</div>
</template>

<script>
import InfoNav from '@/components/infoPage/InfoNav.vue';
import Carousel from '@/components/infoPage/Carousel.vue';
import ItemDetailCard from '@/components/infoPage/ItemDetailCard.vue';
export default {
	name: 'ItemInfo',
	props: {
		_id: String,
	},

	components: {
		InfoNav,
		Carousel,
		ItemDetailCard,
	},

	computed: {
		// get the right data from the id
		itemData() {
			let flag = false;
			for (const item of this.$store.state.items) {
				if (item._id === this._id) {
					flag = true;
					return item;
				}
			}
			if (
				this.$store.state.items.length > 0 &&
				flag
			) {
				this.$router.push({name: 'NotFound'});
			}
		},
	},
};
</script>
<style scoped lang="scss"></style>
