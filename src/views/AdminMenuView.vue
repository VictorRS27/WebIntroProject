<template>
    <div class="container">
        <Navbar/>
        <AdminMenu/>
        <!-- <Footer/> -->
    </div>
</template>
<script>
import AdminMenu from '../components/AdminMenu.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    components: {
        Navbar,
        AdminMenu,
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