<template>
    <Navbar />
    <div class="box">
        <h1>Cart</h1>
        <hr />
        <div class="inner_box">
            <Product v-for="(product, index) in products" :key="product.id" :infos="product" @delete-product="removeProduct" @emit-product="updateProducts"
            :class="{ 'product-line': index !== 0 }" />
            
            <hr class="product-line" />
            <Address @send-credit-card="confirmPurchase(creditCardNumber)" />
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
            consolelog("CreditCartNumber = ", creditCardNumber);   
            if (creditCardNumber) {
                consolelog("CreditCartNumber = ", creditCardNumber);   
                // Handle purchase confirmation logic
            }
        },
        removeProduct(deletedProduct) {
            this.products = this.products.filter((product) => product.id !== deletedProduct.id);
            this.saveCart();
        },
        updateProducts(product) {

            let index = 0;
            for(let i = 0; i < this.products.length; i++)
                if(product.id == this.products[i].id)
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
                for(let i = 0; i < this.products.length; i++) {

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

@media screen and (max-width: 700px){
    .inner_box{
        padding: 0;
    }
}

</style>