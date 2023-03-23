<template>
  <div class="app">
    <Navbar />
    <RouterView />
    <Footer>Bolha</Footer>
  </div>
</template>

<script>

import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  margin: 0%;
  height: 100vh;

}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
