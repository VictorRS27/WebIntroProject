<template>
    <Navbar />
    <div class="lines_prod">
        <CardLine :infos="ids[0]" />
        <CardLine :infos="ids[1]" />
        <CardLine :infos="ids[2]" />
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import CardLine from '../components/CardLine.vue';
export default {
    name: "Products",
    data() {
        return {
            ids: []
        }
    },
    components: {
        Navbar,
        CardLine
    },
    mounted() {
        this.ids = [] /* busca JSON no bancp */
        console.log(this.ids)

    },
}
</script>
<style scoped>
.lines_prod {
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>