<template>
    <Navbar />
    <div class="container">
        <div class="box">

            <h2>Register Admin</h2>

            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" placeholder="Enter username" v-model="username" required/>
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="Enter password" v-model="password" required/>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Enter email" v-model="email" required/>
            </div>

            <div class="form-group">
                <label for="telephone">telephone:</label>
                <input 
                type="telephone" 
                id="telephone" 
                placeholder="Enter telephone" 
                v-model="telephone"
                @input="formatPhoneNumber" 
                maxlength="15"/>
            </div>

            <p class="warning-text" v-show="showWarning">Email or username already exists.</p>


            <button class="submit-button" @click="registerAdmin">Submit</button>

        </div>
    </div>
</template>

<script>


import axios from 'axios';
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    components: {
        Navbar,
        Footer
    },
    name: "RegisterAdmin",
    data() {
        return {
            username: "",
            password: "",
            email: "",
            telephone: "",
            showWarning: false, // New data property for showing the warning text
        };
    },
    props: {
        item_id: {
            default: -1
        }
    },
    mounted() {
        let Mycookie = document.cookie;

        if (Mycookie == "" || (Mycookie != "" && Mycookie[0] != 'a')) {
            this.$router.push('/error');
        }
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
        load_edit() {
            console.log(this.item_id)
            if (this.item_id !== -1) {
                axios.get("http://localhost:3000/admin")
                    .then((response) => {
                        console.log(response.data)
                        let to_edit = response.data.filter((admin) => admin.id == this.item_id)
                        to_edit = to_edit[0]
                        this.username = to_edit.username;
                        this.password = to_edit.password;
                        this.email = to_edit.email;
                        this.telephone = to_edit.telephone;
                        console.log(this.username)
                    })
                    .catch((error) => {
                        console.error("Error registering admin:", error);
                    });
            }
        },
        registerAdmin() {
            const newAdmin = {
                username: this.username,
                password: this.password,
                email: this.email,
                telephone: this.telephone
            };

            if (this.item_id === -1) {
                // Check if username or email already exists in 'admin' or 'users' data
                axios.get("http://localhost:3000/admin")
                    .then((response) => {
                        const admins = response.data;
                        const adminExists = admins.some(admin => admin.username === newAdmin.username || admin.email === newAdmin.email);
                        if (adminExists) {
                            console.error("Admin with the same username or email already exists.");
                            this.showWarning = true; // Set showWarning to true to display the warning text
                            return;
                        }

                        axios.get("http://localhost:3000/users")
                            .then((response) => {
                                const users = response.data;
                                const userExists = users.some(user => user.username === newAdmin.username || user.email === newAdmin.email);
                                if (userExists) {
                                    console.error("User with the same username or email already exists.");
                                    this.showWarning = true; // Set showWarning to true to display the warning text
                                    return;
                                }

                                axios.post("http://localhost:3000/admin", newAdmin)
                                    .then((response) => {
                                        console.log("Admin registered successfully:", response.data);
                                        this.username = "";
                                        this.password = "";
                                        this.email = "";
                                        this.telephone = "";
                                        this.showWarning = false; // Reset showWarning to false after successful registration
                                    })
                                    .catch((error) => {
                                        console.error("Error registering admin:", error);
                                    });
                            })
                            .catch((error) => {
                                console.error("Error retrieving users:", error);
                            });
                    })
                    .catch((error) => {
                        console.error("Error retrieving admins:", error);
                    });

            }
            else {
                axios.put(`http://localhost:3000/admin/${this.item_id}`, newAdmin)
                    .then(response => {
                        this.$router.push("/crud?crud=admin")
                        // Faça algo com a resposta
                    })
                    .catch(error => {
                        console.error('Erro ao atualizar o item:', error);
                        // Trate o erro adequadamente
                    });
            }
        },
    },
};
</script >
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.register-admin {
    width: inherit;
}

h2 {
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
    width: 40vw;
}

label {
    display: block;
    font-weight: bold;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="telephone"] {
    width: 100%;
    padding: 5px 0;
    border: none;
    border-bottom: 4px solid #46D115;
    background-color: transparent;
    font-size: 16px;
    color: black;
}

.submit-button {
    margin: 20px;
    background-color: #46D115;
    border-radius: 30px;
    height: 4vh;
    width: 30%;
    border: 0cm;
    font-family: 'Courier New', Courier, monospace;
    color: aliceblue;
    font-size: 18px;
    cursor: pointer;
}

.warning-text {
    color: red;
    margin-top: 5px;
    font-size: 14px;
}

@media screen and (max-width: 700px) {
    .form-group {
        width: 90vw;
    }
}
</style>