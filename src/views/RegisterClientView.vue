<template>
    <Navbar />

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
                <input type="tel" id="telephone" placeholder="Enter telephone" v-model="telephone" @input="formatPhoneNumber" maxlength="15"/>
            </div>

            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" placeholder="Enter address" v-model="address" />
            </div>


            <button class="submit-button" @click="registerClient">Submit</button>
            <div v-show="success">
                <p>User {{ this.username }} was registered ! </p>
                <p>You will be redirected in <time><strong id="seconds">3</strong> seconds</time>.</p>
            </div>


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

            user: "",
            success: false
        };
    },
    props: {
        item_id: {
            default: -1
        }
    },
    mounted() {
        this.load_edit()
    },
    methods: {
        formatPhoneNumber() {
            let value = this.telephone
            value = value.replace(/\D/g, '')
            value = value.replace(/(\d{2})(\d)/, "($1) $2")
            value = value.replace(/(\d)(\d{4})$/, "$1-$2")
            this.telephone = value
        },
        countdown() {
            var el = document.getElementById('seconds'),
                total = el.innerHTML,
                timeinterval = setInterval(function () {
                    total = --total;
                    el.textContent = total;
                    if (total <= 0) {
                        clearInterval(timeinterval);
                    }
                }, 1000);

            setTimeout(() => {
                this.$router.push("/login")
            }, 3000);
        },
        load_edit() {
            console.log(this.item_id)
            if (this.item_id !== -1) {
                axios.get("http://localhost:3000/users/" + this.item_id)
                    .then((response) => {
                        this.username = response.data.username
                        this.password = response.data.password
                        this.email = response.data.email
                        this.telephone = response.data.telephone
                        this.address = response.data.address
                    })
                    .catch((error) => {
                        console.error("Error registering admin:", error);
                    });
            }
        },
        registerClient() {
            const newClient = {
                username: this.username,
                password: this.password,
                email: this.email,
                telephone: this.telephone,
                address: this.address,
            };

            if (this.item_id == -1) {


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
                                        this.user;


                                        console.log("Client registered:", response.data);
                                        this.username = "";
                                        this.password = "";
                                        this.email = "";
                                        this.telephone = "";
                                        this.address = "";
                                        this.usernameExists = false;
                                        this.emailExists = false;

                                        this.success = true;

                                        this.countdown();

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

            } else {
                axios.put(`http://localhost:3000/users/${this.item_id}`, newClient)
                    .then(response => {
                        this.$router.push("/crud?crud=users")
                        // Faça algo com a resposta
                    })
                    .catch(error => {
                        console.error('Erro ao atualizar o item:', error);
                        // Trate o erro adequadamente
                    });
            }
        }
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
