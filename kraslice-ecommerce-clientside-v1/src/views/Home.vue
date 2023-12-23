<template>
	<main class="body__app__homeContainer__main">
		<!--Top part for filters-->
		<CategoryNavigation />

		<!--Main Section-->

		<!--Items and filter and sort-->
		<section
			class="body__app__homeContainer__main__contentContainer"
		>
			<!-- Filter on the left side -->

			<AsideFilter
				v-if="
					this.$store.state.itemSelection
						.sortAndFilter
				"
			/>

			<!-- Item rendering -->
			<div
				class="body__app__homeContainer__main__contentContainer__itemContainer___empty"
				v-if="PagedItems == 0"
				:class="{
					body__app__homeContainer__main__contentContainer__itemContainer___empty___off:
						!this.$store.state.itemSelection
							.sortAndFilter,
				}"
			>
				<img
					src="@/assets/img/pageAssets/warning.png"
					alt=""
				/>

				<h2>{{ CalculateEmpty }}</h2>
			</div>

			<div
				class="body__app__homeContainer__main__contentContainer__itemContainer"
				v-if="PagedItems != 0"
				:class="{
					body__app__homeContainer__main__contentContainer__itemContainer___off:
						!this.$store.state.itemSelection
							.sortAndFilter,
				}"
			>
				<!-- shop item component -->
				<Item
					v-for="item of PagedItems"
					:key="item._id"
					:content="item"
				/>
			</div>
		</section>
		<!-- Pager swapper at the bottom -->
		<Pager
			:filteredItemsLength="this.FilteredItems.length"
			:MaxPage="this.MaxPage"
		/>
	</main>
</template>

<script>
// Shop Item Component
import Item from '@/components/home/Item.vue';
// Aside Filter
import AsideFilter from '@/components/home/AsideFilter.vue';
// Page Swapper
import Pager from '@/components/home/Pager.vue';
// Cat Nav
import CategoryNavigation from '@/components/home/CategoryNavigation.vue';
//import func from 'vue-editor-bridge';
export default {
	name: 'Home',
	components: {
		CategoryNavigation,
		Item,
		AsideFilter,
		Pager,
	},
	methods: {},
	computed: {
		// calculate empty
		CalculateEmpty() {
			if (this.$store.state.items.length == 0) {
				return 'Chyba při nahrávání položek, prosím zkuste otevřít stránku znovu!';
			} else if (
				this.$store.state.itemSelection
					.sortAndFilter &&
				this.$store.state.itemSelection.liked &&
				this.FilteredItems.length == 0 &&
				this.$store.state.liked.length == 0
			) {
				return 'Nenalezeny žádné položky v kategorii oblíbené!';
			} else if (
				this.$store.state.itemSelection
					.sortAndFilter &&
				this.$store.state.itemSelection.liked &&
				this.FilteredItems.length == 0 &&
				this.$store.state.liked.length != 0
			) {
				return 'Nenalezeny žádné položky odpovídající filtru!';
			} else if (
				!this.$store.state.itemSelection
					.sortAndFilter &&
				this.$store.state.itemSelection.liked &&
				this.FilteredItems.length == 0
			) {
				return 'Nenalezeny žádné položky v kategorii oblíbené!';
			} else if (
				this.$store.state.itemSelection
					.sortAndFilter &&
				!this.$store.state.itemSelection.liked &&
				this.FilteredItems.length == 0
			) {
				return 'Nenalezeny žádné položky odpovídající filtru!';
			} else {
				return 'Nenalezeny žádné položky!';
			}
		},

		// Main Item Filtering Funtion
		FilteredItems() {
			let allItems = [...this.$store.state.items];

			// item category
			for (const key of Object.keys(
				this.$store.state.groups
			)) {
				if (
					this.$store.state.groups[key].status ==
					true
				) {
					const selectedCat =
						this.$store.state.groups[key];

					allItems = allItems.filter(function (
						item
					) {
						if (
							item.cat.includes(
								selectedCat.cat
							)
						) {
							return true;
						} else if (
							selectedCat.cat == 'all'
						) {
							return true;
						} else {
							return false;
						}
					});

					break;
				}
			}
			// liked
			if (this.$store.state.itemSelection.liked) {
				const liked = this.$store.state.liked;

				allItems = allItems.filter(function (item) {
					if (liked.includes(item._id)) {
						return true;
					} else {
						return false;
					}
				});
			}

			// filter
			if (
				this.$store.state.itemSelection
					.sortAndFilter
			) {
				/// eggs

				const selectedEggs =
					this.$store.state.filterEggTypesOn;
				if (selectedEggs.length > 0) {
					allItems = allItems.filter(function (
						item
					) {
						for (const egg of selectedEggs) {
							if (
								item.eggType.includes(egg)
							) {
								return true;
							} else {
								continue;
							}
						}
						return false;
					});
				}

				/// packaging
				if (this.$store.state.quantityIndex !== 0) {
					const listOfValues =
						this.$store.state
							.filterPackageQuantityOn;
					const currentIndex =
						this.$store.state.quantityIndex;

					allItems = allItems.filter(function (
						item
					) {
						if (
							item.packageQuantity ==
							listOfValues[currentIndex]
						) {
							return true;
						} else {
							return false;
						}
					});
				}
				/// sorted by price
				if (
					this.$store.state.sortPriceOn ==
					'ascend'
				) {
					allItems.sort((itemA, itemB) => {
						return itemA.price - itemB.price;
					});
				} else if (
					this.$store.state.sortPriceOn ==
					'descend'
				) {
					allItems
						.sort((itemA, itemB) => {
							return (
								itemA.price - itemB.price
							);
						})
						.reverse();
				}
			}

			return allItems;
		},
		// get the number of pages possible
		MaxPage() {
			return Math.ceil(
				this.FilteredItems.length / 16
			);
		},

		// item pager method -> directly linked to the item v-for on the page
		PagedItems() {
			if (this.MaxPage < this.$store.state.page) {
				this.$store.commit('updatePageNumber', 1);
			}
			const allItems = [...this.FilteredItems];

			// get items by the current page (1-x)
			const pagedItems = allItems.slice(
				(this.$store.state.page - 1) * 16,
				(this.$store.state.page - 1) * 16 + 16
			);

			return pagedItems;
		},
	},
};
</script>
