<template>
    <div class="container">
        <Navbar/>
        <Events/>
        <!-- <Footer/> -->
    </div>
</template>

<script>

import Events from '../components/Events.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    components: {
        Navbar,
        Events,
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