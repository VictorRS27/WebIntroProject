<!-- ParentComponent.vue -->
<template>
  <Navbar/>
  <div class="loginPage">
    <div class="container">
      <div class="box">
        <h1>Login</h1>
        <InputText v-model:value="username" label="Nome de Usuário" placeHolder="petFriend24"/>
        <InputText v-model:value="password" label="Senha" placeHolder="********"/>
        <InputSubmit class="submit-btn" @submit2="redirect"></InputSubmit>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import InputSubmit from '../components/InputSubmit.vue';
import InputText from '../components/InputText.vue';

export default {
  data() {
    return {
      username: '', 
      password: '' 
    }
  },
  components: {
    InputText,
    InputSubmit,
    Navbar
  },
  methods: {
    redirect() {
      console.log(this.username);
      console.log(this.password);
      /* this.$router.push('/') */
    }
  }
}
</script>

  
<style scoped>
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

input+input {
  margin: 4vh 10px 0 10px;
}

input+button {
  margin: 4vh 10px 0 10px;
}

h1 {
  padding-left: 20px;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  margin-top: 15vh;
}

.submit-btn {
  align-self: flex-end;
  margin-right: 20px;
}

.loginPage {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>