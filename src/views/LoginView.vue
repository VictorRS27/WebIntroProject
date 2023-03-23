<template>
    <div class="loginPage">
      <div class="box">
        <h1>Login</h1>
        <Input></Input>
        <Input></Input>
      </div>
    </div>
  </template>
  
  <script>
  import Input from '../components/Input.vue';
  
  export default {
    components: {
      Input
    },
  }
  </script>
  
  <style scoped>
  .box {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  
  input + input {
    margin: 4vh 0 0 0;
  }
  
  h1 {
    padding-left: 20px;
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
  }
  
  Input {
    width: 80%;
    align-self: center;
  }
  
  .loginPage {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>