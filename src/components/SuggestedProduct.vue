<template>
	<div class="box">
		<div class="upper">
			<div class="image">
				<img :src="product.photos[0]" alt="Product Image" />
			</div>
		</div>
		<div class="divider"></div>
		<div class="lower">
			<div class="details">
				<h1>{{ product.productName }}</h1><br>
				<p>$ {{ product.productPrice }}</p><br>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "product",
	props: {
		infos: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			product: {
				productName: "Dog Collar Puffy Air",
				productPrice: 9.99,
				productDescription: "A comfortable and stylish collar for your pet.",
				photos: ["/public/greenCollar.png"],
			},
			quantity: 1,
			quantityInStock : 10,
		};
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

