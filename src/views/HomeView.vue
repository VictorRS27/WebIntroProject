<template>
  <div>
    <div class="subtitle_container">
      <h2>Produtos</h2>
      
      <RouterLink to="/about">
        <h2> See all</h2>
      </RouterLink>
    </div>
    <div class="container">
      <!-- <div class="card_line"> -->
      <Card />
      <Card />
      <Card />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
export default {
  components: {
    Card
  },
}
</script>

<style>
.card_line {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  margin: 30px;
}

.subtitle_container {
  display: flex;
  justify-content: space-between;
  margin: 0 10vw;
}


.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
}

.subtitle_container a {
  color: black;
}
</style>