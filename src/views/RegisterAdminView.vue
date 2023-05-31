<template>
    <Navbar />
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

            <p class="warning-text" v-show="showWarning">Email or username already exists.</p>

        </div>
        <button class="submit-button" @click="registerAdmin">Submit</button>

    </div>
</template>
<script>
import RegisterAdmin from '../components/RegisterAdmin.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    components: {
        Navbar,
        RegisterAdmin,
        Footer
    },
    name: "RegisterAdmin",
    data() {
        return {
            username: "",
            password: "",
            email: "",
            showWarning: false, // New data property for showing the warning text
        };
    },
    methods: {
        registerAdmin() {
            const newAdmin = {
                username: this.username,
                password: this.password,
                email: this.email,
            };

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
        },
    },
};
</script >
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