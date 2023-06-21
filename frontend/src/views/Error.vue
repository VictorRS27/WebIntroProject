<template>
    <Navbar />
    <div class="container">
      <div class="box">
        <h1 class="title">404 Error - Page Not Found</h1>
        <p class="message">We're sorry, but the page you requested could not be found.</p>
        <button class="submit-button" @click="goHome">Go Home</button>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  
  export default {
    name: 'error',
    components: {
      Navbar
    },
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  * {
    font-family: 'Courier New', Courier, monospace;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .box {
    margin-top: 5vh;
    border-style: solid;
    width: 60vw;
    border-width: 3px;
    border-color: #46D115;
    border-radius: 30px;
    padding: 30px;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .message {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  button.submit-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #46D115;
    border-radius: 30px;
    border: 0;
    font-size: 18px;
    color: aliceblue;
    cursor: pointer;
  }
  
  @media screen and (max-width: 700px) {
    .box {
      width: 90vw;
      padding: 20px;
    }
  }
  </style>
  