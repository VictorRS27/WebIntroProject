<template>
	<div class="box_a">
		<div class="header">
			<h1>{{ product.productName }}</h1>
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
			<div class="image" @click="openProductPurchase">
				<img :src="product.photos[0]" alt="Product Image" />
			</div>
			<div class="details">
				<p>{{ product.productShortDescription }}</p>
				<p>${{ product.productPrice }}</p>
				<p v-if="product.quantityInStock !== 0" class="quantity-stock">In Stock: {{ product.quantityInStock }}</p>
				<p v-else class="without-stock">In Stock: {{ product.quantityInStock }}</p>
				<div class="quantity">
					<!-- <button @click="decreaseQuantity" :disabled="product.quantityInStock === 0" :class="{ 'disabled-button': product.quantityInStock === 0 }">-</button> -->
					<span>{{ product.quantity }}</span>
					<!-- <button @click="increaseQuantity" :disabled="product.quantityInStock === 0" :class="{ 'disabled-button': product.quantityInStock === 0 }">+</button> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Product",
	data() {
		return {
			product: {
				id: 0,
				productName: "Dog Collar Puffy Air",
				productPrice: 9.99,
				productDescription: "Puffy Air Doco Dog Collar Green:\nTo ensure safety and comfort for your dog on the walk, you need to choose a good collar, so he won't escape or get hurt.With that in mind the Puffy Air Doco Dog Collar is lightweight and sturdy, with a stylish design and super comfortable for your pooch. It has a solid, vibrant color and is easily seen from a distance.This dog collar has a plastic fastener with quick release and buckles for a perfect fit around the pet's neck. It has reinforced stitching and a welded metal ring for better fixing the guide.Enjoy and buy now here at Cobasi the Puffy Air Doco Dog Collar at an incredible price. On the site, on the app or in our physical stores.\nSize:\nMini Breeds, Small Breeds, Medium Breeds, Large Breeds.\nAge:\nPuppy, Adult, Senior\nBrand:\nDoco\nColor:\nGreen",
				productShortDescription: "Make your dog walks a breeze with our durable and stylish Dog Leash",
				photos: ["/public/greenCollar.png"],
				quantityInStock : 19,
				quantitySold : 123,
				quantity: 0,
			},
		};
	},
	methods: {
		increaseQuantity() {
			if(this.product.quantity < this.product.quantityInStock) {
				this.product.quantity++;
				console.log("this.quantity = ", this.product.quantity)
				this.$emit("emit-product", this.product)
			}
		},
		decreaseQuantity() {
			if (this.product.quantity > 1) {
				this.product.quantity--;
				this.$emit("emit-product", this.product)
			}
		},
		deleteProduct() {
			this.$emit("delete-product", this.product);
		},
		openProductPurchase() {
			this.$router.push('/ProductPurchase?id=' + this.product.id);
		},
	},
	props: {
		infos: {
			type: Object,
			required: true,
		}
	},
	mounted() {
		this.product = { ...this.infos };
	},
};
</script>


<style scoped>
* {
	font-family: 'Courier New', Courier, monospace;
}

.box_a {
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
	height: auto;
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
	font-size: 1.4em;
	color: #666;
}

.quantity {
	display: flex;
	align-items: center;
	margin-top: 4vh;
}

.quantity-stock {
	font-size: 1.2em;
	margin-top: 0.5vw;
	color: #888;
}

.without-stock {
	font-size: 1.2em;
	margin-top: 0.5vw;
	color: red;
}

button {
	border: none;
	background-color: #46D115;
	color: white;
	font-weight: bold;
	font-size: 1.3em;
	width: 2vw;
	height: 2vw;
	cursor: pointer;
	margin: 0 0.1vw;
	border-radius: 50%;
	transition: background-color 0.3s;
}

span {
	font-weight: bold;
	font-size: 1.5vw;
	margin: 0 0.1vw;
	background-color: white;
	padding: 0 0.6vw;
	border-radius: 0.5vw;
	box-shadow: 0 0.2vw 0.5vw rgba(0, 0, 0, 0.4);
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

.disabled-button {
	background-color: darkgray;
	cursor: not-allowed;
	transition: background-color 0.3s;
}

.disabled-button:hover {
	background-color: gray;
}


@media screen and (max-width: 700px){
	.box_a{
		width: 80vw;
	}
	p{
		font-size: 0.8em;
	}
	.image img {
		width: 20vw;
		height: auto;
	}
	.product {
		align-items: flex-start;
	}
	
	.quantity-stock {
		font-size: 0.6em;
	}
	.quantity {
		margin-top: 2vh;
	}
	button {
		height: 4vh;
		width: 4vh;
	}
	span {
		height: 4vh;
		width: 4vh;
		font-size: 1.2em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>