<template>
  <div>
    <Navbar/>
    <div class="button-container">
      
      <h2> Admin Menu </h2>
      <div class="grid">
        <button class="custom-button" style="background-color: #46D115;" @click="crudClients">Client Management</button>
        <button class="custom-button" style="background-color: #46D115;" @click="crudProducs">Stock Management</button>
        <button class="custom-button" style="background-color: #46D115;" @click="crudAdmins">Admin Management</button>
        <button class="custom-button" style="background-color: #46D115;" @click="crudEvents">Event Management</button>
      </div>
    </div>
  </div>
</template>
<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
  components: {
    Navbar,
    Footer
  },
  methods: {
    crudClients() {
      this.$router.push('/crud?crud=users');
    },
    crudProducs() {
      this.$router.push('/crud?crud=products');
    },
    crudAdmins() {
      this.$router.push('/crud?crud=admin');
    },
    crudEvents() {
      this.$router.push('/crud?crud=events');
    }
  }
}
</script >
<style scoped>
.button-container {
  margin-top: 25vh ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: auto auto;
  margin-bottom: 30px;
}

.custom-button{
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.custom-button {
  padding: 40px 80px;
  background-color: #46D115;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px ;
  cursor: pointer;
  margin: 10px;
}
</style>