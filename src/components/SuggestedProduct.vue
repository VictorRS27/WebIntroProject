<template>
	<div class="box">
		<div class="upper">
			<div class="image">
				<img :src="product.image" alt="Product Image" />
			</div>
		</div>
		<div class="divider"></div>
		<div class="lower">
			<div class="details">
				<h1>{{ product.name }}</h1><br>
				<p>$ {{ product.price }}</p><br>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SuggestedProduct",
	data() {
        return {
            product: {
                name: "Dog Collar Puffy Air",
                price: 9.99,
                description: "A comfortable and stylish collar for your pet.",
                image: "/public/greenCollar.png",
            },
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
    border-style: solid;
    align-self: center;
    width: 12vw;
    border-width: 0.2vw;
    border-color: #46D115;
    border-radius: 2vw;
}

.image img {
	width: 10vw;
	height: 10vw;
	object-fit: cover;
	border-radius: 2vw;
}

.details {
	flex: 1;
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
</style>

