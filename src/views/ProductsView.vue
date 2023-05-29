<template>
    <Navbar/>
    <div class="lines_prod">
        <CardLine/>
        <CardLine/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import CardLine from '../components/CardLine.vue';
export default {
    name: "Products",
    components: {
        Navbar,
        CardLine
    }
}
</script>
<style scoped>
    .lines_prod {
        margin-top: 15vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>