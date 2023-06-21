<template>
    <div class="social-icon">
      <i :class="`fab fa-${socialMedia}`" @click="redirect"></i>
    </div>
  </template>
  
  <script>
  export default {
    name: "Icon",
    props: {
      socialMedia: {
        type: String,
        required: true
      }
    },
    methods: {
        redirect() {
            window.location.href = `https://${this.socialMedia}.com/petTheShop`
        }
    },
  };
  </script>
  
  <style scoped>
  .social-icon {
    width: 40px;
    height: 40px;
    background-color: #eee;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    cursor: pointer;
  }
  
  .social-icon i {
    color: #333;
    font-size: 24px;
  }
  </style>
  