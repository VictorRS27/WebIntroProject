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

      <button class="submit-button" @click="registerAdmin">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "RegisterAdmin",
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    registerAdmin() {
      const newAdmin = {
        // Update the ID accordingly
        username: this.username,
        password: this.password,
        email: this.email,
      };

      // Send newAdmin data to the JSON server using your preferred method (e.g., axios, fetch)
      // Example using axios:
      axios
        .post("http://localhost:3000/admin", newAdmin) // Update the URL according to your JSON server endpoint
        .then((response) => {
          console.log("Admin registered successfully:", response.data);
          // Clear form fields
          this.username = "";
          this.password = "";
          this.email = "";
        })
        .catch((error) => {
          console.error("Error registering admin:", error);
        });
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-style: solid;
  align-self: center;
  width: 40vw;
  border-width: 3px;
  border-color: #46d115;
  border-radius: 30px;
  padding: 10px 10px;
  margin-top: 20vh;
}

.register-admin {
  max-width: 500px;
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
