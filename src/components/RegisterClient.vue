<template>
    <div class="box">
        <div class="register-client">
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

        </div>
        <button class="submit-button" @click="registerClient">Submit</button>

    </div>
</template>
  
<script>
import axios from 'axios';

export default {
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

.register-client {
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
input[type="email"],
input[type="tel"] {
    width: 20vw;
    padding: 5px 0;
    border: none;
    border-bottom: 2px solid lightgreen;
    background-color: transparent;
    font-size: 16px;
    color: black;
}

.submit-button {
    display: block;
    width: 20vw;
    padding: 10px;
    background-color: white;
    border: 1px solid lightgreen;
    border-radius: 4px;
    color: green;
    font-weight: bold;
    cursor: pointer;
}

.warning-text {
    color: red;
    margin-top: 5px;
    font-size: 14px;
}
</style>
  