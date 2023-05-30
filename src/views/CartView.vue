<template>
    <Navbar/>
    <div class="cart-box">
        <h1>Cart</h1>
        <div class="container">
            <div class="product-line"></div>
            <Product v-for="(product, index) in products" :key="product.id" :product="product" @delete-product="removeProduct" :class="{ 'product-line': index !== 0 }" />
            <div class="product-line"></div>
            <Address/>
            <!-- <Footer/> -->
        </div>
    </div>      
</template>

<script>

import Address from '../components/Address.vue'
import Product from '../components/ProductQuantity.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    components: {
        Navbar,
        Product,
        Address,
        Footer
    },
    
    data() {
        return {
            products: [
            {
                id: 1,
                name: "Collar",
                price: 19.99,
                description: "A comfortable and stylish collar for your pet.",
                image: "/public/greenCollar.png",
            },
            {
                id: 2,
                name: "Collar2",
                price: 29.99,
                description: "A comfortable and stylish collar for your pet.",
                image: "/public/greenCollar.png",
            },
            {
                id: 3,
                name: "Collar3",
                price: 39.99,
                description: "A comfortable and stylish collar for your pet.",
                image: "/public/greenCollar.png",
            },
            {
                id: 4,
                name: "Collar4",
                price: 49.99,
                description: "A comfortable and stylish collar for your pet.",
                image: "/public/greenCollar.png",
            },
            {
                id: 5,
                name: "Collar5",
                price: 59.99,
                description: "A comfortable and stylish collar for your pet.",
                image: "/public/greenCollar.png",
            },
            ],
        };
    },
    
    methods: {
        removeProduct(deletedProduct) {
            this.products = this.products.filter((product) => product !== deletedProduct);
        },
    },
    
}
</script >
<style scoped>
* {
    font-family: 'Courier New', Courier, monospace;
}

.cart-box {
    border-style: solid;
    align-self: center;
    width: 50vw;
    border-width: 0.2vw;
    border-color: #46D115;
    border-radius: 30px;
    padding-left: 0vw;
    padding-right: 3vw;
    margin-top: 12vh;
    margin-bottom: 12vh;
}

h1 {
    font-size: 7vh;
    margin-left: 4vw;
}

.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;
}

.product-line {
    border-top: 1px solid #46D115;
    border-radius: 0;
}
</style>