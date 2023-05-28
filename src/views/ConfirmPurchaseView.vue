<template>
    <div class="container">
        <Navbar/>
        <ConfirmPurchase/>
        <!-- <Footer/> -->
    </div>
</template>
<script>
import ConfirmPurchase from '../components/ConfirmPurchase.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    components: {
        Navbar,
        ConfirmPurchase,
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