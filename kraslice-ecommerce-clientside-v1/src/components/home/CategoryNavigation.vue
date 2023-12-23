<template>
	<section
		class="body__app__homeContainer__main__filterNav"
	>
		<div
			class="body__app__homeContainer__main__filterNav__buttonContainer"
		>
			<!-- Left side -->
			<div
				class="body__app__homeContainer__main__filterNav__buttonContainer__groups"
			>
				<!-- Cats -->
				<div
					class="body__app__homeContainer__main__filterNav__buttonContainer__button"
					v-for="(
						properties, group
					) in ItemGroups"
					:key="group"
					:class="{
						body__app__homeContainer__main__filterNav__buttonContainer__button___selected:
							properties.status,
					}"
					@click="ItemGroups = group"
				>
					{{ properties.name }}
				</div>
			</div>
			<!-- Right side -->
			<div
				class="body__app__homeContainer__main__filterNav__buttonContainer__selection"
			>
				<!-- Filter -->
				<div
					class="body__app__homeContainer__main__filterNav__buttonContainer__button"
					:class="{
						body__app__homeContainer__main__filterNav__buttonContainer__button___selected:
							changeItemSelection.sortAndFilter,
					}"
					@click="
						changeItemSelection =
							'sortAndFilter'
					"
				>
					SEŘAZENÍ A FILTR
				</div>
				<!-- Hearth -->
				<div
					class="body__app__homeContainer__main__filterNav__buttonContainer__button"
					id="heart"
					:class="{
						body__app__homeContainer__main__filterNav__buttonContainer__button___selected:
							changeItemSelection.liked,
					}"
					@click="changeItemSelection = 'liked'"
				>
					<font-awesome-icon
						icon="fa-regular fa-heart"
						v-if="!changeItemSelection.liked"
					/>
					<font-awesome-icon
						icon="fa-solid fa-heart"
						v-if="changeItemSelection.liked"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'CategoryNavigation',
	computed: {
		// items selectors
		// computed right side filter and hearht
		changeItemSelection: {
			get: function () {
				return this.$store.state.itemSelection;
			},
			set: function (property) {
				if (
					this.$store.state.itemSelection[
						property
					]
				) {
					this.$store.commit(
						'changeItemSelection',
						{
							property: property,
							propertyState: false,
						}
					);
				} else {
					this.$store.commit(
						'changeItemSelection',
						{
							property: property,
							propertyState: true,
						}
					);
				}
			},
		},
		// computed for left side cat groups
		ItemGroups: {
			get: function () {
				return this.$store.state.groups;
			},
			set: function (property) {
				for (const key of Object.keys(
					this.$store.state.groups
				)) {
					this.$store.commit('changeCategory', {
						name: key,
						status: false,
					});
				}

				this.$store.commit('changeCategory', {
					name: property,
					status: true,
				});
			},
		},
	},
};
</script>
