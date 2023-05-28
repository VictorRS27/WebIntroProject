<template>
    <div class="container">
        <Navbar/>
        <CreateEvent/>
        <!-- <Footer/> -->
    </div>
</template>

<script>
import CreateEvent from '../components/CreateEvent.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    components: {
        Navbar,
        CreateEvent,
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