<template>

<div class="box">
    <div class="register-admin">
      <h2>Register Admin</h2>
  
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
  
      <button class="submit-button">Submit</button>
    </div>

    </div>
  </template>
  
  <script>
  export default {
    name: "RegisterAdmin",
    data() {
      return {
        username: '',
        password: '',
        email: ''
      };
    }
  };
  </script>
  
  <style scoped>

.box{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    border-style: solid;
    align-self: center;
    width: 40vw;
    border-width: 3px;
    border-color: #46D115;
    border-radius: 30px;
    padding: 10px 10px;
    margin-top: 20vh;
}

  .register-admin {
    max-width: 500px;
    /* margin: 20vh; */
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
  input[type="email"] {
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
  