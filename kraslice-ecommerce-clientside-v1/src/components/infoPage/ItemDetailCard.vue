<template>
	<div
		class="body__app__detailContainer__detailCard__details"
	>
		<div
			class="body__app__detailContainer__detailCard__details__headerContainer"
		>
			<h2>{{ itemName }}</h2>
			<div
				class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__like__button"
				id="heart"
				@click="like"
				:class="{
					body__app__detailContainer__detailCard__details__quantityAndBuy__container__like__button___selected:
						this.$store.state.liked.includes(
							this._id
						),
				}"
			>
				<font-awesome-icon
					icon="fa-regular fa-heart"
					v-if="
						!this.$store.state.liked.includes(
							this._id
						)
					"
				/>
				<font-awesome-icon
					icon="fa-solid fa-heart"
					v-if="
						this.$store.state.liked.includes(
							this._id
						)
					"
				/>
			</div>
		</div>
		<p
			class="body__app__detailContainer__detailCard__details__description"
		>
			{{ itemDescription }}
		</p>
		<div
			class="body__app__detailContainer__detailCard__details__predefinedDescription"
		>
			<!-- Egg types -->
			<div
				class="body__app__detailContainer__detailCard__details__predefinedDescription__detailContainer"
			>
				<font-awesome-icon
					class="body__app__detailContainer__detailCard__details__predefinedDescription__detailContainer__icon"
					icon="fa-solid fa-egg"
				/>
				<p>{{ eggType }}</p>
			</div>
			<!-- Package quantity -->
			<div
				class="body__app__detailContainer__detailCard__details__predefinedDescription__detailContainer"
			>
				<font-awesome-icon
					class="body__app__detailContainer__detailCard__details__predefinedDescription__detailContainer__icon"
					icon="fa-solid fa-box-open"
				/>
				<p>{{ packageQuantity }}</p>
			</div>
		</div>
		<!-- quantity counter and cart-->
		<div
			class="body__app__detailContainer__detailCard__details__quantityAndBuy"
		>
			<div
				class="body__app__detailContainer__detailCard__details__quantityAndBuy__container"
			>
				<p
					class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__price"
				>
					{{ itemPrice }}Kč
				</p>
			</div>

			<!-- like and add to cart -->
			<div
				class="body__app__detailContainer__detailCard__details__quantityAndBuy__container"
			>
				<!-- Quantity -->

				<div
					class="body__app__detailContainer__detailCard__details__quantityAndBuy__container"
				>
					<div
						class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__quantity"
					>
						<div
							class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__quantity__button"
							@click="changeQuantity(-1)"
							:class="{
								body__app__detailContainer__detailCard__details__quantityAndBuy__container__count__quantity___available:
									this.quantity - 1 > 0,
							}"
						>
							<font-awesome-icon
								icon="fa-solid fa-minus"
							/>
						</div>
						<div
							class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__quantity__count"
						>
							{{ quantity }}
						</div>
						<div
							class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__quantity__button"
							@click="changeQuantity(1)"
							:class="{
								body__app__detailContainer__detailCard__details__quantityAndBuy__container__count__quantity___available:
									this.quantity + 1 <=
									100,
							}"
						>
							<font-awesome-icon
								icon="fa-solid fa-plus"
							/>
						</div>
					</div>
				</div>

				<!-- Add to basket -->
				<div
					class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__addToCart"
					@click="addToCart"
				>
					PŘIDAT DO KOŠÍKU
					<font-awesome-icon
						icon="fa-solid fa-basket-shopping"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ItemDetailCard',
	data() {
		return {
			quantity: 1,
		};
	},
	props: {
		itemData: Object,
		_id: String,
	},
	methods: {
		changeQuantity(change) {
			if (
				this.quantity + change > 0 &&
				this.quantity + change <= 100
			)
				this.quantity += change;
		},
		like() {
			this.$store.commit('updateLiked', this._id);
		},
		addToCart() {
			this.$store.dispatch('addToCart', {
				_id: this._id,
				quantity: this.quantity,
			});
			this.$router.push({name: 'Cart'});
		},
	},
	computed: {
		// computed properties for the the information deck
		// Compute egg text for the item egg list
		eggType() {
			if (this.itemData) {
				const eggTypes = this.itemData.eggType;
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
			} else {
				return '';
			}
		},
		// Compute the text for the item quantity
		packageQuantity() {
			if (this.itemData) {
				const eggCount =
					this.itemData.packageQuantity;
				if (eggCount < 5) {
					return `${eggCount} kraslice v jednom balení`;
				} else if (eggCount > 4) {
					return `${eggCount} kraslic v jednom balení`;
				}
			} else {
				return '';
			}
		},
		itemName() {
			if (this.itemData) {
				return this.itemData.name;
			} else {
				return '';
			}
		},
		itemDescription() {
			if (this.itemData) {
				return this.itemData.description;
			} else {
				return '';
			}
		},
		itemPrice() {
			if (this.itemData) {
				return this.itemData.price;
			}
		},
	},
};
</script>
