<template>
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
        };
    },
    methods: {
        createEvent() {
            const newEvent = {
                eventName: this.eventName,
                eventDate: this.eventDate,
                eventDescription: this.eventDescription,
                eventType: this.eventType,
                eventAddress: this.eventAddress,
                photos: [this.photo1].filter(Boolean)
            };
            
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
    },
    mounted() {
        let Mycookie = document.cookie;
        
        if(Mycookie == "" || (Mycookie != "" && Mycookie[0] != 'a')) {
            this.$router.push('/error');
        }
    },
}
</script>

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
    justify-content: center;
    align-items: center;
}

h2 {
    text-align: center;
}
</style>
