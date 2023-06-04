<template>
  <Navbar />
  <div class="container">
    <div class="box">
      <h1>Login</h1>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" placeholder="petFriend24" v-model="username" />
      </div>
      <div class="form-group">
        <label for="username">Senha:</label>
        <input type="password" placeholder="********" v-model="password" />
      </div>
      <div class="buttons">
        <button class="submit-button" @click="redirect">Submit</button>
        <button class="submit-button" @click="redirectRegisterClient">Register</button>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
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
      axios.get("http://localhost:3000/users")
      .then((response) => {
        let match = response.data.filter((user) => user.username === this.username && user.password === this.password);
        if (match.length != 1) {
          axios.get("http://localhost:3000/admin")
          .then((response) => {
            let match2 = response.data.filter((user) => user.username === this.username && user.password === this.password);
            console.log(match2);
            if (match2.length != 1) {
              alert("Não foi encontrado")
            }
            else {
              console.log("entrou")
              document.cookie = 'admin=' + match2[0].id;
              this.$router.push('/adminmenu');
            }
          })
          .catch((error) => {
            console.log(error);
          });
        }
        else {
          console.log(match);
          document.cookie = 'user=' + match[0].id;
          this.$router.push('/');
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
    },
    redirectRegisterClient() {
      this.$router.push('/RegisterUsers');
    }
  }
}
</script>


<style scoped>
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  margin-top: 20vh;
  margin-bottom: 10vh;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  width: 80%;
}

</style>