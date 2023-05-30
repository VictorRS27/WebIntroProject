<template>
    <div class="container">
        <Product/>
        <!-- <Footer/> -->
    </div>
</template>
<script>

import Product from '../components/ProductQuantity.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        Product,
        Footer
    }

}
</script >
<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
}
</style>