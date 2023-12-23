<template>
	<aside
		class="body__app__homeContainer__main__contentContainer__itemFilter"
	>
		<!-- Filter Heading -->
		<h2>Seřazení a Filtr</h2>
		<!-- Egg types container -->
		<div
			class="body__app__homeContainer__main__contentContainer__itemFilter__catContainer"
		>
			<p>Druhy Vajíček</p>
			<div v-for="(item, i) of FilterEggs" :key="i">
				<input
					type="checkBox"
					:checked="
						$store.state.filterEggTypesOn.includes(
							item
						)
							? 'checked'
							: ''
					"
					@click="selectFilter(item)"
				/>
				<p>{{ item }}</p>
			</div>
		</div>
		<!-- Quantity container -->
		<div
			class="body__app__homeContainer__main__contentContainer__itemFilter__catContainer"
		>
			<p>Počet Vajíček v Balení</p>
			<div
				class="body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer"
			>
				<div
					class="body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer__button"
					@click="changeQuantity(-1)"
					:class="{
						body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer__count__available:
							this.$store.state
								.quantityIndex -
								1 >=
							0,
					}"
				>
					<font-awesome-icon
						icon="fa-solid fa-angle-left"
					/>
				</div>
				<div
					class="body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer__count"
				>
					{{
						this.$store.state
							.filterPackageQuantityOn[
							this.$store.state.quantityIndex
						]
					}}
				</div>
				<div
					class="body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer__button"
					@click="changeQuantity(1)"
					:class="{
						body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer__count__available:
							this.$store.state
								.quantityIndex +
								1 <=
							this.$store.state
								.filterPackageQuantityOn
								.length -
								1,
					}"
				>
					<font-awesome-icon
						icon="fa-solid fa-angle-right"
					/>
				</div>
			</div>
		</div>
		<!-- Price container -->
		<div
			class="body__app__homeContainer__main__contentContainer__itemFilter__catContainer"
		>
			<p>Cena</p>
			<div>
				<input
					type="checkBox"
					:checked="
						SortItems === 'descend'
							? 'checked'
							: ''
					"
					@click="selectSortItems('descend')"
				/>
				<p>Sestupně</p>
			</div>
			<div>
				<input
					type="checkBox"
					:checked="
						SortItems === 'ascend'
							? 'checked'
							: ''
					"
					@click="selectSortItems('ascend')"
				/>

				<p>Vzestupně</p>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'AsideFilter',
	methods: {
		// change quantity
		changeQuantity(change) {
			this.Quantity = change;
		},
		// select / deselect filter
		selectFilter(item) {
			this.FilterEggs = item;
		},
		// select / deselect sort
		selectSortItems(sortType) {
			this.SortItems = sortType;
		},
	},
	computed: {
		// filters
		// Change Egg filtering
		FilterEggs: {
			get: function () {
				return this.$store.state.filterEggTypesAll;
			},
			set: function (egg) {
				this.$store.dispatch(
					'updatefilterEggTypesOn',
					egg
				);
			},
		},
		/// Change Quantity filtering
		Quantity: {
			get: function () {
				return this.$store.state.quantityIndex;
			},
			set: function (i) {
				if (
					this.$store.state.quantityIndex + i <=
						this.$store.state
							.filterPackageQuantityOn
							.length -
							1 &&
					this.$store.state.quantityIndex + i !=
						-1
				) {
					this.$store.commit(
						'updateQuantityIndex',
						i
					);
				}
			},
		},
		/// Change Price Sorting
		SortItems: {
			get: function () {
				return this.$store.state.sortPriceOn;
			},
			set: function (sortType) {
				if (
					this.$store.state.sortPriceOn ==
						'ascend' &&
					sortType == 'ascend'
				) {
					this.$store.commit('updateSorting', '');
				} else if (
					this.$store.state.sortPriceOn ==
						'descend' &&
					sortType == 'descend'
				) {
					this.$store.commit('updateSorting', '');
				} else {
					this.$store.commit(
						'updateSorting',
						sortType
					);
				}
			},
		},
	},
};
</script>
<style></style>
