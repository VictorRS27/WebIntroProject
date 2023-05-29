<template>
  <div class="app">
    <RouterView />
    <Footer></Footer>
    <Sound/>
  </div>
</template>

<script>
import Sound from './components/Sound.vue'
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Sound,
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
