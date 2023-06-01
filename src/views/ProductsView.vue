<template>
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="col-3" v-for="(product, index) in suggestedProducts" :key="product.id">
                <SuggestedProduct :infos="product" />
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import SuggestedProduct from '../components/SuggestedProduct.vue';

export default {
    name: "Products",
    data() {
        return {
            suggestedProducts: [],
            suggestedEvents: [],
        }
    },
    components: {
        SuggestedProduct,
        Navbar,
    },
    mounted() {
        this.loadSuggestedProducts();
    },
    methods: {
        loadSuggestedProducts() {
            axios
            .get('http://localhost:3000/products')
            .then((response) => {
                const products = response.data;
                this.suggestedProducts = products.slice(0);
            })
            .catch((error) => {
                console.error('Error fetching suggested products:', error);
            });
        },
    },
}
</script>

<style scoped>
.container {
  margin-top: 15vh;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
}

.col-3 {
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
}
</style>