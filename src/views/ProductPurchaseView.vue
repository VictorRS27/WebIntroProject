<template>
    <Navbar/>
    <ProductPurchase/>

    <h1>Product Suggestions</h1>
    <div class="container">
        <SuggestedProduct/>  
        <SuggestedProduct/>  
        <SuggestedProduct/> 
    </div> 
</template>

<script>

import SuggestedProduct from '../components/SuggestedProduct.vue'
import ProductPurchase from '../components/ProductPurchase.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    name: "ProductPurchaseView",
    components: {
        Navbar,
        SuggestedProduct,
        ProductPurchase,
        Footer
    },
}
</script >

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