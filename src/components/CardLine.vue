<template>
    <div class="container">
        <Card />
        <Card />
        <Card />
    </div>
</template>
<script>
import Card from './Card.vue';
export default {
    name: "CardLine",
    components: {
        Card
    },
    props: {
        infos: {}
    },
}
</script>
<style scoped>
.container {
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
}
</style>