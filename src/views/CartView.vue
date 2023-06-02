<template>
    <Navbar />
    <div class="box">
        <h1>Cart</h1>
        <hr />
        <div class="inner_box">
            <Product v-for="(product, index) in products" :key="product.id" :infos="product" @delete-product="removeProduct"
            :class="{ 'product-line': index !== 0 }" />
            
            <hr class="product-line" />
            <Address @send-credit-card="confirmPurchase(creditCardNumber)" />
            <button class="save-button" @click="saveCart">Save</button> <!-- Add the Save button here -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Address from '../components/Address.vue';
import Product from '../components/ProductQuantity.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

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
        this.loadProducts();
    },
    methods: {
        
        loadCart() {
            return new Promise((resolve, reject) => {
                axios
                .get('http://localhost:3000/cart')
                .then((response) => {
                    let id_cliente = document.cookie;
                    id_cliente = parseInt(id_cliente);
                    let cart = response.data.filter((bla) => bla.id_cliente == id_cliente);
                    console.log("cart1 = ", cart[0]);
                    resolve(cart[0]); // Resolve the promise with the desired value
                })
                .catch((error) => {
                    console.error('Error fetching suggested products:', error);
                    reject(error); // Reject the promise with an error
                });
            });
        },
        async loadProducts() {
            try {
                const cart = await this.loadCart();
                axios
                .get('http://localhost:3000/products')
                .then((response) => {
                    const products = response.data;
                    let allProducts = products.slice();
                    console.log("allProducts = ", allProducts);
                    console.log("cart.products = ", cart.products);
                    
                    this.products = [];
                    for (let i = 0; i < allProducts.length; i++) {
                        for (let j = 0; j < cart.products.length; j++) {
                            if (allProducts[i].id == cart.products[j].id) {
                                this.products.push(allProducts[i]);
                                this.products[this.products.length - 1].quantity = cart.products[j].qtd;
                            }
                        }
                    }
                })
                .catch((error) => {
                    console.error('Error fetching suggested products:', error);
                });
            } catch (error) {
                console.error(error);
            }
        },
        confirmPurchase(creditCardNumber) {
            if (creditCardNumber) {
                // Handle purchase confirmation logic
            }
        },
        removeProduct(deletedProduct) {
            console.log(this.products);
            console.log("deleted product: ", deletedProduct);
            this.products = this.products.filter((product) => product.id !== deletedProduct.id);
        },
        loadProductQuantity() {
            axios
            .get('http://localhost:3000/cart')
            .then((response) => {
                let id_cliente = document.cookie;
                id_cliente = parseInt(id_cliente);
                let cart = response.data.filter((bla) => bla.id_cliente == id_cliente);
                this.loadProducts(cart[0]);
            })
            .catch((error) => {
                console.error('Error fetching suggested products:', error);
            });
        },
        async saveCart() {
            
            try {
                const cartData = await this.loadCart();
                cartData.products = []
                for(let i = 0; i < this.products.length; i++) {
                    cartData.products.push(
                    {
                        "id": this.products[i].id,
                        "qtd": this.products[i].quantity
                    }
                    )
                }

                console.log("cartData.id = ", cartData.id)
                console.log("cartData = ", cartData)

                axios
                .put('http://localhost:3000/cart/' + cartData.id, cartData) // Assuming the endpoint to update the cart is a PUT request
                .then((response) => {
                    console.log('Cart saved successfully:', response.data);
                })
                .catch((error) => {
                    console.error('Error saving cart:', error);
                });
                
                console.log(cart);
            } catch (error) {
                // Handle errors here
                console.error(error);
            }
        },
    },
};
</script>


<style scoped>
* {
    font-family: 'Courier New', Courier, monospace;
}

/* .cart-box {
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
} */

h1 {
    font-size: 7vh;
    margin-left: 4vw;
}

hr {
    border-color: #46D115;
    box-shadow: none;
    border-style: inherit;
    width: 100%;
}

.box {
    margin-top: 20vh;
    padding: 0;
}

.inner_box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;
    padding: 30px;
}

.product-line {
    border-top: 1px solid #46D115;
    border-radius: 0;
}
.save-button {
    padding: 10px 20px;
    background-color: #46D115;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5vw;
    margin-top: 3vh;
}

</style>