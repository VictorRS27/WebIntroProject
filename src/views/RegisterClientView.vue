<template>
    <Navbar/>

    <div class="container">
        <div class="box">
            <h2>Register Client</h2>

            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" placeholder="Enter username" v-model="username" />
                <p class="warning-text" v-show="usernameExists">Username already exists.</p>
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="Enter password" v-model="password" />
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Enter email" v-model="email" />
                <p class="warning-text" v-show="emailExists">Email already exists.</p>
            </div>

            <div class="form-group">
                <label for="telephone">Telephone:</label>
                <input type="tel" id="telephone" placeholder="Enter telephone" v-model="telephone" />
            </div>

            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" placeholder="Enter address" v-model="address" />
            </div>


            <button class="submit-button" @click="registerClient">Submit</button>
        </div>
    </div>
</template>
<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios';

export default {
    components: {
        Navbar,
        Footer
    },
    name: "RegisterClient",
    data() {
        return {
            username: "",
            password: "",
            email: "",
            telephone: "",
            address: "",
            usernameExists: false, // New data property for username existence check
            emailExists: false, // New data property for email existence check
        };
    },
    methods: {
        registerClient() {
            const newClient = {
                username: this.username,
                password: this.password,
                email: this.email,
                telephone: this.telephone,
                address: this.address,
            };

            axios.get("http://localhost:3000/admin")
                .then((adminResponse) => {
                    axios.get("http://localhost:3000/users")
                        .then((usersResponse) => {
                            const admins = adminResponse.data;
                            const users = usersResponse.data;
                            const usernameExists =
                                admins.some((admin) => admin.username === newClient.username) ||
                                users.some((user) => user.username === newClient.username);
                            const emailExists =
                                admins.some((admin) => admin.email === newClient.email) ||
                                users.some((user) => user.email === newClient.email);
                            if (usernameExists) {
                                this.usernameExists = true;
                                this.emailExists = false;
                                return;
                            }
                            if (emailExists) {
                                this.usernameExists = false;
                                this.emailExists = true;
                                return;
                            }

                            axios.post("http://localhost:3000/users", newClient)
                                .then((response) => {
                                    console.log("Client registered:", response.data);
                                    this.username = "";
                                    this.password = "";
                                    this.email = "";
                                    this.telephone = "";
                                    this.address = "";
                                    this.usernameExists = false;
                                    this.emailExists = false;
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script >
<style scoped>
.container {
    margin-top: 15vh;
    margin-bottom: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
}

.box {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

h2 {
    text-align: center;
}
</style>
  