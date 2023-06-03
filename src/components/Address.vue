<template>
	<div class="box_no_border">
		<h2>Shipping Information</h2>
		<form>
			<div class="form-group">
				<label for="first-name">First Name(s):</label>
				<input id="first-name" type="text" v-model="firstName"  />
				<!--já não tem o nome da pessoa no cadsatro dela? -->
			</div>
			<div class="form-group">
				<label for="last-name">Last Name(s):</label>
				<input id="last-name" type="text" v-model="lastName"  />
			</div>


			<div class="form-group">
				<label for="address">Address:</label>
				<input id="address" type="text" v-model="address"  />
			</div>
			<div class="form-group">
				<label for="complement">Complement:</label>
				<input id="complement" type="text" v-model="complement" />
			</div>
			<div class="form-group">
				<label for="cep">CEP Code:</label>
				<input id="cep" type="text" v-model="cep"  />
			</div>





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

		};
	},

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



@media screen and (max-width: 700px) {
	.box_no_border {
		width: 80vw;
	}
}
</style>
