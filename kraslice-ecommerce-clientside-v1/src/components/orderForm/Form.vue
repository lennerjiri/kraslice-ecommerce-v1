<template>
	<div class="body__app__orderContainer__formContainer">
		<!-- Form - Shipping -->
		<div
			class="body__app__orderContainer__formContainer__formCover"
		>
			<h2>Doručovací údaje</h2>
			<form
				class="body__app__orderContainer__formContainer__formCover__form"
				action=""
			>
				<h3>Osobní Údaje</h3>
				<input
					placeholder="Jméno a Příjmení"
					type="text"
					v-model="fullName"
					:class="{
						inputCorrect: fullNameEv,
					}"
				/>

				<input
					:class="{
						inputCorrect: emailEv,
					}"
					type="email"
					placeholder="Email"
					v-model="email"
				/>

				<input
					type="tel"
					placeholder="Telefon"
					v-model="phone"
					:class="{
						inputCorrect: phoneEv,
					}"
				/>
				<h3>Adresa</h3>
				<input
					placeholder="Ulice a č. p."
					type="text"
					:class="{
						inputCorrect: streetEv,
					}"
					v-model="street"
				/>
				<input
					placeholder="Obec"
					type="text"
					:class="{
						inputCorrect: townEv,
					}"
					v-model="town"
				/>
				<input
					placeholder="PSČ"
					type="text"
					v-model="houseAddress"
					:class="{
						inputCorrect: houseAddressEv,
					}"
				/>
				<h3>Zpráva pro malířku</h3>
				<textarea
					v-model="message"
					name=""
					id=""
				></textarea>
				<h3>Způsob Platby</h3>
				<div
					class="body__app__orderContainer__formContainer__formCover__form__paymentMethod"
				>
					<div
						class="body__app__orderContainer__formContainer__formCover__form__paymentMethod__methodContainer"
						:class="{
							body__app__orderContainer__formContainer__formCover__form__paymentMethod___checked:
								this.paymentMethod ==
								'online',
						}"
						@click="
							changePaymentMethod('online')
						"
					>
						<!-- 1 -->
						<div>
							<font-awesome-icon
								icon="fa-solid fa-credit-card"
							/>
							<p>Online</p>
						</div>
						<div
							class="body__app__orderContainer__formContainer__formCover__form__paymentMethod__methodContainer__check"
						></div>
					</div>
					<!-- 2 -->
					<div
						class="body__app__orderContainer__formContainer__formCover__form__paymentMethod__methodContainer"
						:class="{
							body__app__orderContainer__formContainer__formCover__form__paymentMethod___checked:
								this.paymentMethod ==
								'inPerson',
						}"
						@click="
							changePaymentMethod('inPerson')
						"
					>
						<div>
							<font-awesome-icon
								icon="fa-solid fa-coins"
							/>
							<p>Dobírkou</p>
						</div>
						<div
							class="body__app__orderContainer__formContainer__formCover__form__paymentMethod__methodContainer__check"
						></div>
					</div>
				</div>
				<div
					class="body__app__orderContainer__formContainer__formCover__form__buttons"
				>
					<div
						class="body__app__orderContainer__formContainer__formCover__form__continueButtonContainer"
						@click="submitOrder"
					>
						<div
							class="body__app__orderContainer__formContainer__formCover__form__continueButton"
							:class="{
								body__app__orderContainer__formContainer__formCover__form__continueButton___off:
									!this.submitOrderEv &&
									!this.orderButton,
								body__app__orderContainer__formContainer__formCover__form__continueButton___orderSend:
									this.orderButton,
							}"
						>
							OBJEDNAT
						</div>
					</div>
				</div>
			</form>
		</div>
		<!-- img -->
		<div
			class="body__app__orderContainer__formContainer__img"
		>
			<img
				src="@/assets/img/pageAssets/kraslice.jpg"
				alt=""
			/>
			<div
				class="body__app__orderContainer__formContainer__img__cover"
			></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Form',
	data() {
		return {
			fullName: '',
			email: '',
			phone: '',
			street: '',
			town: '',
			houseAddress: '',
			message: '',
			paymentMethod: '',
			orderButton: false,
		};
	},
	methods: {
		changePaymentMethod(method) {
			if (this.paymentMethod == method) {
				this.paymentMethod = '';
				return;
			}
			this.paymentMethod = method;
		},
		async submitOrder() {
			const fullName = this.fullName;
			const email = this.email;
			const phone = this.phone;
			const street = this.street;
			const town = this.town;
			const houseAddress = this.houseAddress;
			const message = this.message;
			const paymentMethod = this.paymentMethod;
			const cart = this.$store.state.cart;

			const data = {
				fullName: fullName,
				email: email,
				phone: phone,
				street: street,
				town: town,
				houseAddress: houseAddress,
				message: message,
				paymentMethod: paymentMethod,
				cart: cart,
			};

			if (
				this.submitOrderEv &&
				this.paymentMethod == 'inPerson' &&
				this.$store.state.cart.length > 0 &&
				!this.orderButton
			) {
				this.orderButton = true;
				// submit order
				await fetch(
					'https://kraslicelennerova.cz/api/v1/orders',
					{
						method: 'POST',
						headers: {
							'Content-Type':
								'application/json',
						},
						body: JSON.stringify({
							data: data,
						}),
					}
				).then(response => {
					if (response.status == 200) {
						this.$router.push({
							name: 'Success',
						});

						// clean up the cart
						this.$store.commit('cleanCart');
					} else {
						this.$router.push({name: 'Failed'});
					}
				});
			} else if (
				this.submitOrderEv &&
				this.paymentMethod == 'online' &&
				this.$store.state.cart.length > 0 &&
				!this.orderButton
			) {
				this.orderButton = true;
				// for the online payment

				const response = await fetch(
					'https://kraslicelennerova.cz/api/v1/orders',
					{
						method: 'POST',
						headers: {
							'Content-Type':
								'application/json',
						},
						body: JSON.stringify({
							data: data,
						}),
					}
				);
				const formatedResponse =
					await response.json();

				if (response.status != 200) {
					this.$router.push({name: 'Failed'});
					return;
				}

				window.location.href =
					formatedResponse.data.sessionUrl.url;

				// PROBLEM => how will the data be send to the server => if the order was successfull
			}
		},
	},
	computed: {
		// Form inputs evaluation system
		fullNameEv() {
			return this.fullName.length != 0;
		},
		emailEv() {
			return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
				this.email
			);
		},
		phoneEv() {
			return /^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/.test(
				this.phone
			);
		},
		streetEv() {
			return this.street.length != 0;
		},
		townEv() {
			return this.town.length != 0;
		},
		houseAddressEv() {
			return (
				/\d{5}/.test(this.houseAddress) ||
				/\d{3} ?\d{2}/.test(this.houseAddress)
			);
		},
		paymentMethodEv() {
			return this.paymentMethod != '';
		},
		// Odeslat objednávku
		submitOrderEv() {
			if (
				this.fullNameEv &&
				this.emailEv &&
				this.phoneEv &&
				this.streetEv &&
				this.townEv &&
				this.houseAddressEv &&
				this.paymentMethodEv
			) {
				return true;
			}
		},
	},
};
</script>

<style></style>
