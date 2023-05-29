<template>
    <div class="container">
        <Navbar/>
        <RegisterAdmin/>
        <!-- <Footer/> -->
    </div>
</template>
<script>
import RegisterAdmin from '../components/RegisterAdmin.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    components: {
        Navbar,
        RegisterAdmin,
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