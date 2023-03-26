<template>
  <div class="loginPage">
    <form @submit="redirect($event)">
      <div class="box">
        <h1>Login</h1>
        <InputText class="text-field" v-model="login"></InputText>
        <!-- <InputText class="text-field"></InputText> -->
        <input type="text" v-model="senha"/>
        <InputSubmit class="submit-btn"></InputSubmit>
      </div>
    </form>
  </div>
</template>
  
<script>
import InputSubmit from '../components/InputSubmit.vue';
import InputText from '../components/InputText.vue';

export default {
  data() {
    return {
      login: null,
      senha: null
    }
  },
  components: {
    InputText,
    InputSubmit
  },
  methods: {
    redirect(e) {

      e.preventDefault();
      
      const data = {
        login: this.login,
        senha: this.senha
      }
      console.log(data)
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

h1 {
  padding-left: 20px;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}

.text-field {
  width: 80%;
  align-self: center;
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