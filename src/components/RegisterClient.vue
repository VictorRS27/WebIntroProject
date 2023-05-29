<template>
    <div class="register-client">
      <h2>Register Client</h2>
  
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" placeholder="Enter username" v-model="username" />
      </div>
  
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Enter password" v-model="password" />
      </div>
  
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Enter email" v-model="email" />
      </div>
  
      <div class="form-group">
        <label for="telephone">Telephone:</label>
        <input type="tel" id="telephone" placeholder="Enter telephone" v-model="telephone" />
      </div>
  
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" placeholder="Enter address" v-model="address" />
      </div>
  
      <button class="submit-button">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegisterClient",
    data() {
      return {
        username: '',
        password: '',
        email: '',
        telephone: '',
        address: ''
      };
    }
  };
  </script>
  
  <style scoped>
  .register-client {
    max-width: 500px;
    margin: 10vh;
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="tel"] {
    width: 100%;
    padding: 5px 0;
    border: none;
    border-bottom: 2px solid lightgreen;
    background-color: transparent;
    font-size: 16px;
    color: black;
  }
  
  .submit-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: white;
    border: 1px solid lightgreen;
    border-radius: 4px;
    color: green;
    font-weight: bold;
    cursor: pointer;
  }
  </style>
  