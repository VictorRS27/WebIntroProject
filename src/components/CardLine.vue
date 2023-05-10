<template>
    <div class="container">
        <Card />
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
    methods: {
        controlTotalCards() {
            /* garantir que seja menor ou igual que o total no banco */
            const card = document.querySelector("Card")
            let qntdCards = (card.clientWidth / window.innerWidth).toFixed(0)
            console.log(qntdCards)
            return qntdCards;
        }
    },
}
</script>
<style>
.container {
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
}
</style>