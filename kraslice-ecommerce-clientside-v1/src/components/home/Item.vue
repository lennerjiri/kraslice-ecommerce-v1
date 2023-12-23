<template>
	<div
		class="body__app__homeContainer__main__contentContainer__itemContainer__item"
	>
		<!-- Display hearth if the item is liked -->
		<div
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__likeButton"
			v-if="this.liked.includes(this.content._id)"
			@click="
				$store.commit('updateLiked', content._id)
			"
		>
			<font-awesome-icon icon="fa-solid fa-heart" />
		</div>
		<!-- Item img -->
		<img
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__itemBackgroundImg"
			:src="`https://kraslicelennerova.cz/public/img/${this.content.frontImg}`"
			alt=""
		/>
		<!-- Description container -->
		<div
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__description"
		>
			<!-- Title -->
			<h1
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__description__heading"
			>
				{{ content.name }}
			</h1>
			<!-- Short description -->
			<p
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__description__description"
			>
				{{ description }}
			</p>
		</div>
		<!-- Details container with icon -->
		<div
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__details"
		>
			<!-- Egg types -->
			<div
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail"
			>
				<font-awesome-icon
					class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail__icon"
					icon="fa-solid fa-egg"
				/>
				<p
					class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail__text"
				>
					{{ eggType }}
				</p>
			</div>
			<!-- Package quantity -->
			<div
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail"
			>
				<font-awesome-icon
					class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail__icon"
					icon="fa-solid fa-box-open"
				/>
				<p
					class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail__text"
				>
					{{ packageQuantity }}
				</p>
			</div>
		</div>
		<!-- Lower part with price and button -->
		<div
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__priceAndDetails"
		>
			<p
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__priceAndDetails__price"
			>
				{{ content.price }} Kč
			</p>

			<div
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__priceAndDetails__buttonsContainer"
			>
				<router-link
					:to="`/polozky/${this.content._id}`"
					class="body__app__homeContainer__main__contentContainer__itemContainer__item__priceAndDetails__buttonsContainer_DetailButton"
				>
					VÍCE
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Item',
	// receives data from pops
	props: {
		content: Object,
	},
	computed: {
		// Compute the text for the item quantity
		packageQuantity() {
			const eggCount = this.content.packageQuantity;
			if (eggCount < 5) {
				return `${eggCount} kraslice v jednom balení`;
			} else if (eggCount > 4) {
				return `${eggCount} kraslic v jednom balení`;
			}
		},
		// Compute egg text for the item egg list
		eggType() {
			const eggTypes = this.content.eggType;
			if (eggTypes.length > 1) {
				let eggTypesString = '';
				for (const [
					i,
					eggType,
				] of eggTypes.entries()) {
					if (i == eggTypes.length - 1) {
						eggTypesString += `${eggType}`;
						break;
					}
					eggTypesString += `${eggType}, `;
				}
				return eggTypesString;
			} else {
				return eggTypes[0];
			}
		},
		// shorten the description
		description() {
			const description = this.content.description
				.split(' ')
				.splice(0, 15);
			description[description.length - 1] += '..';
			return description.join(' ');
		},

		// find out whether the item is liked or not -> liked are kept in separate array in vuex (_ids)
		liked() {
			return this.$store.state.liked;
		},
	},
};
</script>
