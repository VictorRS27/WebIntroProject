<template>
    <div class="button-container">
        <h2> Admin Menu </h2>
      <div class="grid">
        <button class="custom-button" style="background-color: #46D115;">Client Management</button>
        <button class="custom-button" style="background-color: #46D115;">Stock Management</button>
        <button class="custom-button" style="background-color: #46D115;">Admin Management</button>
        <button class="custom-button" style="background-color: #46D115;">Event Management</button>
      </div>
    </div>
  </template>

<script>

    export default {
    name: "InputSubmit"
}

    </script>
  
  <style scoped>
  .button-container {
    margin-top: 20vh ;
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
  