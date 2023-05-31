<template>
    <Navbar />
    <ProductPurchase
      v-for="(product, index) in productpurchase"
      :key="product.id"
      :infos="product"
    />
  
    <h1>Product Suggestions</h1>
    <div class="container">
      <SuggestedProduct
        v-for="(product, index) in suggestedProducts"
        :key="product.id"
        :infos="product"
      />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import SuggestedProduct from '../components/SuggestedProduct.vue';
  import ProductPurchase from '../components/ProductPurchase.vue';
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    name: 'ProductPurchaseView',
    components: {
      Navbar,
      SuggestedProduct,
      ProductPurchase,
      Footer,
    },
    data() {
      return {
        suggestedProducts: [],
        productpurchase: [],
      };
    },
    props: {
      infos: {
        type: Object,
        required: true,
      },
      id: {
        type: Number,
        default: 0,
      },
    },
    mounted() {
      this.loadProductPurchase(this.id);
      this.loadSuggestedProducts();
    },
    watch: {
      id(newId) {
        this.loadProductPurchase(newId);
        this.loadSuggestedProducts();
        location.reload(); // Refresh the page
      },
    },
    methods: {
      loadSuggestedProducts() {
        axios
          .get('http://localhost:3000/products')
          .then((response) => {
            const products = response.data;
            const numberOfSuggestions = 3; // Number of suggested products to display
            this.suggestedProducts = products.slice();
            this.suggestedProducts = this.suggestedProducts.sort(
              (a, b) => 0.5 - Math.random()
            );
            this.suggestedProducts = this.suggestedProducts.slice(
              0,
              numberOfSuggestions
            );
          })
          .catch((error) => {
            console.error('Error fetching suggested products:', error);
          });
      },
      loadProductPurchase(id) {
        axios
          .get('http://localhost:3000/products')
          .then((response) => {
            let allProducts = response.data;
            allProducts = allProducts.slice();
            this.productpurchase = allProducts.filter((product) => product.id == id);
          })
          .catch((error) => {
            console.error('Error fetching suggested products:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
  }
  
  .container {
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
  }
  </style>