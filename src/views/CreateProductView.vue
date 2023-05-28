<template>
    <div class="container">
        <Navbar/>
        <CreateProduct/>
        <!-- <Footer/> -->
    </div>
</template>

<script>
import CreateProduct from '../components/CreateProduct.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    components: {
        Navbar,
        CreateProduct,
        Footer
    }

}
</script>
<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
}
</style>