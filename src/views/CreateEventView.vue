<template>
    <Navbar />
    <div class="box">
        <div class="create-event">
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
                <label for="photos">Photos:</label>
                <input type="file" id="photos" @change="handlePhotoUpload" multiple />
                <div class="photos-preview">
                    <div v-for="(photo, index) in photos" :key="index" class="photo">
                        <img :src="photo" alt="Event Photo" />
                        <button class="delete-button" @click="deletePhoto(index)">Delete</button>
                    </div>
                </div>
                <button class="upload-button">Upload Photos</button>
            </div>

            <button class="submit-button" @click="createEvent">Submit</button>
        </div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default {
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            eventName: '',
            eventDate: '',
            eventDescription: '',
            eventType: '',
            eventAddress: '',
            photos: []
        };
    },
    methods: {
        handlePhotoUpload(event) {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.photos.push(reader.result);
                };
                reader.readAsDataURL(files[i]);
            }
        },
        deletePhoto(index) {
            this.photos.splice(index, 1);
        },
        createEvent() {
            const newEvent = {
                eventName: this.eventName,
                eventDate: this.eventDate,
                eventDescription: this.eventDescription,
                eventType: this.eventType,
                eventAddress: this.eventAddress,
                photos: this.photos
            };

            axios.post('http://localhost:3000/events', newEvent)
                .then(response => {
                    console.log('Event created:', response.data);
                    // Clear form fields and photo preview
                    this.eventName = '';
                    this.eventDate = '';
                    this.eventDescription = '';
                    this.eventType = '';
                    this.eventAddress = '';
                    this.photos = [];
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>
<style scoped>
.box {
  margin-top: 12vh;
  margin-bottom: 12vh;
  max-width: 40vw;
}

.create-event {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  max-width: 40vw;
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
input[type="date"],
textarea {
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid lightgreen;
  border-radius: 0;
  color: black;
  font-size: 16px;
}

.photos-preview {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.photo {
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.delete-button {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
}

.upload-button {
  padding: 10px 20px;
  background-color: lightgreen;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
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
