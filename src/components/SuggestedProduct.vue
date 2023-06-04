<template>
	<div class="box">
		<div class="upper">
			<div class="image" @click="openProductPurchase">
				<img :src="product.photos[0]" alt="Product Image" />
			</div>
		</div>
		<div class="divider"></div>
		<div class="lower">
			<div class="details">
				<h1>{{ product.productName }}</h1><br>
				<p>$ {{ product.productPrice }}</p>
				<button class="read-full-btn" @click="openProductPurchase">Read Full</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "product",
	data() {
		return {
			product: {
				id: 0,
				productName: "Dog Collar Puffy Air",
				productPrice: 9.99,
				productDescription: "A comfortable and stylish collar for your pet.",
				productShortDescription: "A comfortable and stylish collar for your pet.",
				photos: ["/public/greenCollar.png"],
				quantityInStock : 10,
			},
			quantity: 1,
		};
	},
	methods: {
        openProductPurchase() {
            this.$router.push('/ProductPurchase?id=' + this.product.id);
        },
    },
	props: {
		infos: {
			type: Object,
			required: true
		}
	},
	mounted() {
		this.product = { ...this.infos };
	}
};
</script>

<style scoped>
* {
	font-family: 'Courier New', Courier, monospace;
}
.box {
	transition: 0.3s;
	border-style: solid;
	align-self: center;
	width: 14vw;
	border-width: 0.2vw;
	border-color: #46D115;
	border-radius: 2vw;
	box-shadow: 0 0.2vw 0.5vw rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.box:hover {
  transform: translateY(-2vh);
}

.image img {
	width: 10vw;
	height: 10vw;
	object-fit: cover;
	border-radius: 2vw;
	cursor: pointer;
}

.details {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}

h1 {
	margin : 0vw;
	font-size: 1.4vw;
}

p {
	margin: 0vw;
	font-size: 1.2vw;
}

.upper {
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 2vh;
}

.divider {
	border: none;
	border-top: 0.2vw solid #46D115;
	margin: 0;
	width: 100%;
}

.lower {
	padding-top: 2vh;
}

.read-full-btn {
	background-color: #46D115;
	color: white;
	border: none;
	border-radius: 0.4vw;
	padding: 0.5vw 1vw;
	font-size: 1vw;
	cursor: pointer;
	margin: 1vw auto;
	width: 10vw;
}

.read-full-btn:focus {
	outline: none;
}

</style>
