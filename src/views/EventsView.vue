<template>
    <div class="container">
      <Navbar />
      <div class="posts">
        <div v-for="event in events" :key="event.id" class="post">
          <h3>{{ event.eventName }}</h3>
          <div id="post_back">
            <p id="post_text">{{ event.eventDescription }}</p>
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
    height: 250px;
    width: 750px;
    border-radius: 30px;
}

#post_text {
    padding: 20px;
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