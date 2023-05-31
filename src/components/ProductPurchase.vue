<template>
    <div class="box">
        <div class="product">
            <div class="image">
                <img :src="product.photos[0]" alt="Product Image" />
            </div>
            <div class="details">
                <div class="header">
                    <h1>{{ product.productName }}</h1>
                </div>
                <p>${{ product.productPrice }}</p>
                <p class="quantity-stock">In Stock: {{ product.quantityInStock }}</p>
                <div class="quantity">
                    <button @click="decreaseQuantity">-</button>
                    <span>{{ quantity }}</span>
                    <button @click="increaseQuantity">+</button>
                </div>
                <button class="add-to-cart-button" @click="addToCart">Add to Cart</button>
            </div>
        </div>
        <div class="description">
            <h2>Description</h2>
            <p>{{ product.productDescription }}</p>
        </div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    name: "ProductPurchase",
    data() {
        return {
            product: {
                productName: "Dog Collar Puffy Air",
                productPrice: 9.99,
                productDescription: "Puffy Air Doco Dog Collar Green:\nTo ensure safety and comfort for your dog on the walk, you need to choose a good collar, so he won't escape or get hurt.With that in mind the Puffy Air Doco Dog Collar is lightweight and sturdy, with a stylish design and super comfortable for your pooch. It has a solid, vibrant color and is easily seen from a distance.This dog collar has a plastic fastener with quick release and buckles for a perfect fit around the pet's neck. It has reinforced stitching and a welded metal ring for better fixing the guide.Enjoy and buy now here at Cobasi the Puffy Air Doco Dog Collar at an incredible price. On the site, on the app or in our physical stores.\nSize:\nMini Breeds, Small Breeds, Medium Breeds, Large Breeds.\nAge:\nPuppy, Adult, Senior\nBrand:\nDoco\nColor:\nGreen",
                photos: ["/public/greenCollar.png"],
                quantityInStock : 19,
            },
            quantity: 1,
        };
    },
    methods: {
        increaseQuantity() {
            if(this.quantity < this.product.quantityInStock) {
                this.quantity++;
            }
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
    components: {
        Navbar,
        Footer
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
}
</script >


<style scoped>
* {
    font-family: 'Courier New', Courier, monospace;
}

.box {
    align-self: center;
    width: 60vw;
    padding: 3vh 3vw;
    position: relative;
    border-radius: 1vw;
    border: 0vw;
    margin-top: 10vh;
}

.product {
    display: flex;
    align-items: center;
}

.image img {
    width: 25vw;
    height: 25vw;
    object-fit: cover;
    border-radius: 2vw;
    margin-right: 2vw;
}

.details {
    flex: 1;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1vh;
}

h1 {
    margin: 0;
    font-size: 1.8vw;
    color: #333;
}

p {
    margin: 0;
    font-size: 1.4vw;
    color: #666;
}

.quantity-stock {
    font-size: 1.2vw;
    margin-top: 0.5vw;
    color: #888;
}

.quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
}

button {
    border: none;
    background-color: #46D115;
    color: white;
    font-weight: bold;
    font-size: 2vw;
    width: 4vw;
    height: 4vw;
    cursor: pointer;
    margin: 0 0.2vw;
    border-radius: 50%;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #3BB009;
}

span {
    font-weight: bold;
    font-size: 2vw;
    margin: 0 0.5vw;
    background-color: white;
    padding: 0 0.8vw;
    border-radius: 0.5vw;
    box-shadow: 0 0.2vw 0.5vw rgba(0, 0, 0, 0.1);
}

button.add-to-cart-button {
    background-color: #46D115;
    color: white;
    font-weight: bold;
    font-size: 1.6vw;
    width: 100%;
    padding: 1.5vh 0;
    margin-top: 2vh;
    border: none;
    border-radius: 0.5vw;
    cursor: pointer;
    transition: background-color 0.3s;
}

button.add-to-cart-button:hover {
    background-color: #3BB009;
}

.description {
    margin-top: 3vh;
    text-align: center;
}

h2 {
    font-size: 1.6vw;
    color: #333;
}

p {
    margin-top: 1vh;
    font-size: 1.4vw;
    color: #666;
    line-height: 1.5;
}

</style>

