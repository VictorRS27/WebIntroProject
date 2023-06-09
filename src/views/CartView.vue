<template>
    <Navbar />
    <div class="box">
        <h1>Cart</h1>
        <hr />
        <div class="inner_box">
            <Product v-for="(product, index) in products" :key="product.id" :infos="product" @delete-product="removeProduct"
                @emit-product="updateProducts" :class="{ 'product-line': index !== 0 }" />

            <hr class="product-line" />
            <Address />
            <div class="form-group">
                <label for="credit-card">Credit Card Number:</label>
                <input type="text" id="credit-card" placeholder="aaaa bbbb cccc dddd" v-model="creditCardNumber"
                    @input="checkCreditCardInput" maxlength="19" required />
            </div>
            <button class="buy-button" :class="{ active: creditCardNumber }" @click="completePurchase">
                BUY
            </button>

            <div v-if="purchaseComplete" class="purchase-message">
                <p>Purchase complete!</p>
                <p>Thank you for choosing Pet The Shop to help you !</p>
                <router-link to="/products">Comprar Mais</router-link>
            </div>
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
            cart: [],
            creditCardNumber: "",
            purchaseComplete: false,
        };
    },
    mounted() {
        this.loadProducts();
    },
    methods: {
        checkCreditCardInput() {
            let v = this.creditCardNumber
            v = v.replace(/\D/g, "");
            v = v.replace(/^(\d{4})(\d)/g, "$1 $2");
            v = v.replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3");
            v = v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4");
            this.creditCardNumber = v
        },
        completePurchase() {
            console.log(this.creditCardNumber);
            if (this.creditCardNumber) {
                // Simulating purchase completion
                this.purchaseComplete = true;
                this.subtractDataBase(); // Wait for subtractDataBase() to execute

            }
        },
        subtractDataBase() {  
            // chamar o banco de produtos
            try {
                axios
                    .get('http://localhost:3000/products')
                    .then((response) => {
                        const products = response.data;
                        let allProducts = products.slice();
                        console.log("allProducts2 = ", allProducts);
                        console.log("cart.products2 = ", this.cart.products);

                        for (let i = 0; i < allProducts.length; i++) {
                            for (let j = 0; j < this.cart.products.length; j++) {
                                if (allProducts[i].id == this.cart.products[j].id) {
                                    allProducts[i].quantityInStock = allProducts[i].quantityInStock - this.cart.products[j].qtd;
                                    console.log('Comprando antes de atualizar = ' + allProducts[i]);
                                    this.updateProduct(allProducts[i]);
                                }
                            }
                        }
                        this.deleteCart();
                    })
                    .catch((error) => {
                        console.error('Error subtracting products:', error);
                    });
            } catch (error) {
                console.error(error);
            }

            // fazer um for pelo cart e pelo banco corrigindo os novos valores
        },
        parseCookiesData(myCookie) {
            const userPrefix = 'user=';
            const adminPrefix = 'admin=';

            if (myCookie.startsWith(userPrefix)) {
                let userId = myCookie.substring(userPrefix.length);

                console.log('User ID:', userId);
                // Do something with the user ID
                return userId;
            } else if (myCookie.startsWith(adminPrefix)) {
                let adminId = myCookie.substring(adminPrefix.length);
                console.log('Admin ID:', adminId);
                // Do something with the admin ID
                return adminId;
            } else {
                console.log('Invalid cookies format');
            }
        },

        loadCart() {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:3000/cart')
                    .then((response) => {
                        let id_cliente = document.cookie;
                        id_cliente = this.parseCookiesData(id_cliente);
                        let cart = response.data.filter((bla) => bla.id_cliente == id_cliente);
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
                this.cart = await this.loadCart();
                axios
                    .get('http://localhost:3000/products')
                    .then((response) => {
                        const products = response.data;
                        let allProducts = products.slice();
                        console.log("allProducts = ", allProducts);
                        console.log("cart.products = ", this.cart.products);

                        this.products = [];
                        for (let i = 0; i < allProducts.length; i++) {
                            for (let j = 0; j < this.cart.products.length; j++) {
                                if (allProducts[i].id == this.cart.products[j].id) {
                                    this.products.push(allProducts[i]);
                                    this.products[this.products.length - 1].quantity = this.cart.products[j].qtd;
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
        deleteCart() {
            try {
                const cartData = this.cart;
                console.log(this.cart)
                cartData.products = []

                axios
                    .put('http://localhost:3000/cart/' + cartData.id, cartData) // Assuming the endpoint to update the cart is a PUT request
                    .then((response) => {
                        console.log('Cart saved successfully:', response.data);
                        /* window.location.reload() */
                    })
                    .catch((error) => {
                        console.error('Error saving cart:', error);
                    });
            } catch (error) {
                // Handle errors here
                console.error(error);
            }

        },
        updateProduct(newProduct) {
            try {
                console.log('Comprando = ' + newProduct);

                axios
                    .put('http://localhost:3000/products/' + newProduct.id, newProduct) // Assuming the endpoint to update the cart is a PUT request
                    .then((response) => {
                        console.log('Cart saved successfully:', response.data);
                    })
                    .catch((error) => {
                        console.error('Error updating product:', error);
                    });
            } catch (error) {
                // Handle errors here
                console.error(error);
            }
        },
        removeProduct(deletedProduct) {
            this.products = this.products.filter((product) => product.id !== deletedProduct.id);
            this.saveCart();
        },
        updateProducts(product) {

            let index = 0;
            for (let i = 0; i < this.products.length; i++)
                if (product.id == this.products[i].id)
                    index = i;

            this.products[index] = product;
            this.saveCart();
        },
        loadProductQuantity() {
            axios
                .get('http://localhost:3000/cart')
                .then((response) => {
                    let id_cliente = document.cookie;
                    id_cliente = this.parseCookiesData(id_cliente);
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
                for (let i = 0; i < this.products.length; i++) {

                    cartData.products.push(
                        {
                            "id": this.products[i].id,
                            "qtd": this.products[i].quantity
                        }
                    )
                }

                axios
                    .put('http://localhost:3000/cart/' + cartData.id, cartData) // Assuming the endpoint to update the cart is a PUT request
                    .then((response) => {
                        console.log('Cart saved successfully:', response.data);
                    })
                    .catch((error) => {
                        console.error('Error saving cart:', error);
                    });
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

h1 {
    font-size: 7vh;
    margin-left: 4vw;
    align-self: flex-start;
}

hr {
    border-color: #46D115;
    box-shadow: none;
    border-style: inherit;
    width: 100%;
}

.box {
    padding: 0;
    margin: 15vh 0 8vh 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.inner_box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px;
}

.product-line {
    border-top: 1px solid #46D115;
    border-radius: 0;
}

@media screen and (max-width: 700px) {
    .inner_box {
        padding: 0;
    }
}

button {
    padding: 10px 20px;
    background-color: #46D115;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5em;
    margin-top: 3vh;
    width: 100%;
}

.purchase-message {
    margin-top: 20px;
    text-align: center;
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
</style>