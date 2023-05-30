<template>
	<div class="box">
		<div class="header">
			<h1>{{ product.name }}</h1>
			<button class="trash-button" @click="deleteProduct">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="24" height="24">
					<path d="M0 0h24v24H0z" fill="none" />
					<path
					d="M19 7h-2V6a3 3 0 0 0-3-3H10a3 3 0 0 0-3 3v1H5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-8-1h4v1h-4V6zm5 14H8v-9h8v9zm-4-8c.55 0 1 .45 1 1s-.45 1-1 1-.997-.45-1-1 .45-1 1-1zM9 15c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v6z"
					/>
				</svg>
				<i class="fas fa-trash"></i>
			</button>
		</div>
		<div class="product">
			<div class="image">
				<img :src="product.image" alt="Product Image" />
			</div>
			<div class="details">
				<p>{{ product.description }}</p>
				<p>${{ product.price }}</p>
				<div class="quantity">
					<button @click="decreaseQuantity">-</button>
					<span>{{ quantity }}</span>
					<button @click="increaseQuantity">+</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Product",
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			quantity: 1,
		};
	},
	methods: {
		increaseQuantity() {
			this.quantity++;
		},
		decreaseQuantity() {
			if (this.quantity > 1) {
				this.quantity--;
			}
		},
		deleteProduct() {
			this.$emit("delete-product", this.product);
		},
	},
};
</script>


<style scoped>
* {
	font-family: 'Courier New', Courier, monospace;
}

.box {
	align-self: center;
	width: 40vw;
	border-width: 0vw;
	padding: 3vh 3vw;
	position: relative; /* Added positioning */
}

.product {
	display: flex;
	align-items: center;
}

.image img {
	width: 10vw;
	height: 10vw;
	object-fit: cover;
	border-radius: 2vw;
	margin-right: 2vw;
}

.details {
	flex: 1;
}

.header {
	display: flex; /* Added to allow alignment */
	justify-content: space-between; /* Added to align items */
	align-items: center; /* Added to align items */
	margin-bottom: 1vh;
}

h1 {
	margin: 0;
}

p {
	margin: 0;
	font-size: 1.2vw;
}

.quantity {
	display: flex;
	align-items: center;
	margin-top: 4vh;
}

button {
	border: none;
	background-color: #46D115;
	color: white;
	font-weight: bold;
	font-size: 1.3vw;
	width: 2vw;
	height: 2vw;
	cursor: pointer;
	margin: 0 0.1vw;
}

span {
	font-weight: bold;
	font-size: 1.5vw;
	margin: 0 0.1vw;
	background-color: darkgray;
	padding: 0 0.6vw;
}

.trash-button {
	background-color: transparent;
	border: none;
	cursor: pointer;
}

.trash-button svg {
	width: 2vw;
	height: 2vw;
	vertical-align: middle;
	margin-top: 2vh;
}

</style>

