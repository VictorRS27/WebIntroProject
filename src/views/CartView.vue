<template>
    <Navbar/>
    <div class="cart-box">
        <h1>Cart</h1>
        <div class="container">
            <div class="product-line"></div>
            <Product v-for="(product, index) in products"
            :key="product.id"
            :infos="product"
            @delete-product="removeProduct"
            :class="{ 'product-line': index !== 0 }"
            />
            
            <div class="product-line"></div>
            <Address @send-credit-card = "confirmPurchase(creditCardNumber)" />
            <!-- <Footer/> -->
        </div>
    </div>      
</template>

<script>

import axios from 'axios'
import Address from '../components/Address.vue'
import Product from '../components/ProductQuantity.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'



export default {
    components: {
        Navbar,
        Product,
        Address,
        Footer,
    },
    
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        this.loadProductQuantity()
    },
    methods: {

        confirmPurchase(creditCardNumber) {
                if (creditCardNumber) {
                    // Simulating purchase completion
                    this.purchaseComplete = true;
                    console.log(creditCardNumber)
                    setTimeout(() => {
                    //     // Redirect to homepage after 5 seconds
                    this.$router.push('/')
                    }, 5000);
                }
            },
        removeProduct(deletedProduct) {
            console.log(this.products)
            console.log("deleted product : ", deletedProduct)
            this.products = this.products.filter((product) => product.id !== deletedProduct.id);
        },
        loadProductQuantity() {
            axios.get('http://localhost:3000/products')
            .then(response => {
                const numberOfproducts = 20 // Number of suggested products to display
                this.products = response.data.slice()
                console.log(this.products)
            })
            .catch(error => {
                console.error('Error fetching suggested products:', error)
            });
        },
    }
    
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