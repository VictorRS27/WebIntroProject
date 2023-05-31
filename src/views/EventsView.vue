<template>
    <div class="container">
      <Navbar />
      <div class="posts">
        <div v-for="event in events" :key="event.id" class="post">
          <h3>{{ event.eventName }}</h3>
          <div id="post_back">
            <div class="post_content">
              <div class="post_text">
                <p>{{ event.eventDescription }}</p>
              </div>
              <div class="post_photos">
                <img v-for="(photo, index) in event.photos" :src="photo" :alt="'photo'+index" :key="index" class="post_photo" />
              </div>
            </div>
          </div>
          <p class="date">{{ formatDate(event.eventDate) }}</p>
          <p><strong>Address:</strong> {{ event.eventAddress }}</p>
          <p><strong>Type:</strong> {{ event.eventType }}</p>
        </div>
      </div>
      <!-- <Footer/> -->
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
    name: 'Events',
    data() {
      return {
        events: []
      };
    },
    mounted() {
      this.fetchEvents();
    },
    methods: {
      fetchEvents() {
        axios.get('http://localhost:3000/events')
          .then(response => {
            this.events = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
  }
  
  .posts {
    margin: 15vw;
    display: flex;
    flex-direction: column;
  }
  
  .post {
    margin-bottom: 20px;
  }
  
  #post_back {
    background-color: lightgrey;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .post_content {
    display: flex;
    flex-wrap: wrap;
  }
  
  .post_text {
    width: 100%;
    padding: 20px;
  }
  
  .post_photos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .post_photo {
    width: 200px;
    height: 200px;
    margin: 10px;
    object-fit: cover;
  }
  
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  
  .date {
    color: #888;
    font-size: 14px;
  }
  </style>
  