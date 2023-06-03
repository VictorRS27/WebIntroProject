<template>
	<div class="box_no_border">
		<h2>Shipping Information</h2>
		<form>
			<div class="form-group">
				<label for="first-name">First Name(s):</label>
				<input id="first-name" type="text" v-model="firstName" required />
				<!--já não tem o nome da pessoa no cadsatro dela? -->
			</div>
			<div class="form-group">
				<label for="last-name">Last Name(s):</label>
				<input id="last-name" type="text" v-model="lastName" required />
			</div>


			<div class="form-group">
				<label for="address">Address:</label>
				<input id="address" type="text" v-model="address" required />
			</div>
			<div class="form-group">
				<label for="complement">Complement:</label>
				<input id="complement" type="text" v-model="complement" />
			</div>
			<div class="form-group">
				<label for="cep">CEP Code:</label>
				<input id="cep" type="text" v-model="cep" required />
			</div>

			<div class="form-group">
				<label for="credit-card">Credit Card Number:</label>
				<input type="text" id="credit-card" placeholder="Enter credit card number" v-model="creditCardNumber"
					@input="checkCreditCardInput" required />
			</div>

			<button class="buy-button" :class="{ active: creditCardNumber }" @click="completePurchase">
				BUY
			</button>

			<div v-if="purchaseComplete" class="purchase-message">
				<p>Purchase complete!</p>
				<p>Returning to homepage in 5 seconds...</p>
			</div>

			<!-- <button type="submit">Submit</button> -->
		</form>
	</div>
</template>

<script>
export default {
	name: "Address",
	data() {
		return {
			infos: {
				"firstName": "Alan",
				"lastName": "Turing",
				"address": "Street Linus Torvalds",
				"complement": "1337",
				"cep": "1234567",
			},
			creditCardNumber: "",
			purchaseComplete: false,
		};
	},
	methods: {
		checkCreditCardInput() {
			// Remove non-digit characters from the credit card number
			this.creditCardNumber = this.creditCardNumber.replace(/\D/g, "");
		},
		completePurchase() {
			if (this.creditCardNumber) {
				// Simulating purchase completion
				this.purchaseComplete = true;
				// setTimeout(() => {
				//	this.$router.push('/')
				//     // Redirect to homepage after 5 seconds
				console.log("BAMAMA")
				this.$emit("send-credit-card", this.creditCardNumber)
				//}, 5000);
			}
		},
	}
};
</script>

<style scoped>
/* CSS styles remain the same as before */

.box_no_border {
	border: none;
	width: 50vw;
	border-radius: 0vw;
}

form {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.form-group {
	width: 100%;
}

button {
	padding: 10px 20px;
	background-color: #46D115;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-weight: bold;
	font-size: 1.5em;
	margin-top: 3vh;
	width: 100%;
}

.purchase-message {
	margin-top: 20px;
	text-align: center;
}

@media screen and (max-width: 700px){
    .box_no_border {
		width: 80vw;
	}
}
</style>
