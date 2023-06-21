<template>
    <Navbar />
    <div class="container">
        <div class="box">
            <h2>Create Event</h2>

            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Enter event name" v-model="eventName" />
            </div>

            <div class="form-group">
                <label for="date">Date:</label>
                <input type="date" id="date" placeholder="Select event date" v-model="eventDate" />
            </div>

            <div class="form-group">
                <label for="description">Description:</label>
                <textarea id="description" placeholder="Enter event description" v-model="eventDescription"></textarea>
            </div>

            <div class="form-group">
                <label for="type">Type:</label>
                <input type="text" id="type" placeholder="Enter event type" v-model="eventType" />
            </div>

            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" placeholder="Enter event address" v-model="eventAddress" />
            </div>

            <div class="form-group">
                <label for="photo">Photo:</label>
                <input type="text" id="photo" placeholder="Enter photo link" v-model="photo" />
            </div>

            <p class="warning-text" v-show="showWarning">
                Fill all required fields!
            </p> 
            <button class="submit-button" @click="createEvent">Submit</button>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import axios from 'axios'

export default {
    components: {
        Navbar
    },
    data() {
        return {
            eventName: '',
            eventDate: '',
            eventDescription: '',
            eventType: '',
            eventAddress: '',
            photo: '',
            showWarning: false
        };
    },
    props: {
        item_id: {
            default: -1
        }
    },
    methods: {
        load_edit() {
            if (this.item_id !== -1) {
                axios.get("http://localhost:3000/events/" + this.item_id)
                    .then((response) => {
                        this.eventName = response.data.eventName
                        this.eventDate = response.data.eventDate
                        this.eventDescription = response.data.eventDescription
                        this.eventType = response.data.eventType
                        this.eventAddress = response.data.eventAddress
                        this.photo = response.data.photos
                    })
                    .catch((error) => {
                        console.error("Error registering admin:", error);
                    });
            }
        },
        createEvent() {
            this.showWarning = false
            if (this.eventName === '' ||
                this.eventDate === '' ||
                this.eventDescription === '' ||
                this.eventType === '' ||
                this.photo === '') {
                this.showWarning = true
            }
            else {
                const newEvent = {
                    eventName: this.eventName,
                    eventDate: this.eventDate,
                    eventDescription: this.eventDescription,
                    eventType: this.eventType,
                    eventAddress: this.eventAddress,
                    photos: [this.photo]
                };
                if (this.item_id === -1) {

                    axios.post('http://localhost:3000/events', newEvent)
                        .then(response => {
                            console.log('Event created:', response.data);
                            // Clear form fields
                            this.eventName = '';
                            this.eventDate = '';
                            this.eventDescription = '';
                            this.eventType = '';
                            this.eventAddress = '';
                            this.photo = '';
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
                else {
                    axios.put(`http://localhost:3000/events/${this.item_id}`, newEvent)
                        .then(response => {
                            this.$router.push("/crud?crud=events")
                            // Faça algo com a resposta
                        })
                        .catch(error => {
                            console.error('Erro ao atualizar o item:', error);
                            // Trate o erro adequadamente
                        });
                }
            }
        }
    },
    mounted() {
        let Mycookie = document.cookie;

        if (Mycookie == "" || (Mycookie != "" && Mycookie[0] != 'a')) {
            this.$router.push('/error');
        }

        this.load_edit()
    },
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    margin: 20vh 0;
}

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h2 {
    text-align: center;
}
</style>
