<template>
    <div class="container">
        <Navbar/>
        <Events/>
        <Sound/>
        <!-- <Footer/> -->
    </div>
</template>

<script>
import Sound from '../components/Sound.vue'
import Events from '../components/Events.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    components: {
        Sound,
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