<template>
  <div>
    <Navbar />
    <h1>Flexbox Blog-Card</h1>

    <div class="blog-wrapper">
      <div v-for="(event, index) in events" :key="index" class="blog-card">
        <div class="card-img">
          <img :src="event.photos[0]" :alt="'photo' + index" />
        </div>
        <h1>{{ event.eventName }}</h1>
        <div class="card-details">
          <span><i class="fa fa-calendar"></i>{{ formatDate(event.eventDate) }}</span>
          <span @click="toggleHeartColor(event)">
            <i class="fa fa-heart" :class="{ 'liked': event.liked }"></i>{{ event.likes }}
          </span>
        </div>
        <div class="card-text">
          <p class="event-description">{{ event.eventDescription }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import axios from 'axios';

export default {
  components: {
    Navbar
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
      axios
        .get('http://localhost:3000/events')
        .then(response => {
          this.events = response.data.map(event => ({ ...event, liked: false }));
        })
        .catch(error => {
          console.log(error);
        });
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    toggleHeartColor(event) {
      event.liked = !event.liked;
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 1vw;
  margin-top: 3vh;
  font-family: 'Oswald', sans-serif;
  text-align: center;
  color: #333;
}

.blog-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10vh;
}

.blog-card {
  transition: 0.3s;
  width: 20vw;
  margin: 15px;
  background: #fff;
  border: 1px solid #80cb60;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  min-width: 300px;
}

.blog-card:hover {
  transform: translateY(-2vh);
}

.blog-card .card-img {
  position: relative;
  text-align: center;
  background: #80cb60;
  border-radius: 10px 10px 0 0;
}

.blog-card .card-img img {
  transition: 0.3s;
  max-height: 180px;
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.blog-card .card-img h1 {
  position: absolute;
  margin: 0;
  font-size: 24px;
  bottom: 15px;
  width: 100%;
  color: #00ffee;
  font-family: 'Slabo 27px', serif;
}

.blog-card .card-details {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  font-family: 'Roboto', sans-serif;
  color: #777;
}

.blog-card .card-details span {
  display: flex;
  align-items: center;
}

.blog-card .card-details i {
  margin-right: 5px;
}

.blog-card .card-details i.liked {
  color: red;
}

.blog-card .card-text {
  padding: 20px 15px;
  font-family: 'Roboto', sans-serif;
  line-height: 22px;
  color: #555;
}
</style>
