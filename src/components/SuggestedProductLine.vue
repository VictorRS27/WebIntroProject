<template>
    <div class="container">
        <SuggestedProduct />
        <SuggestedProduct />
        <SuggestedProduct />
        <SuggestedProduct />
    </div>
</template>
<script>
import SuggestedProduct from './SuggestedProduct.vue';
export default {
    name: "SuggestedProductLine",
    components: {
        SuggestedProduct
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