<template>
  <Navbar />
  <div class="container">
    <div class="posts">
      <div v-for="event in events" :key="event.id" class="post">
        <div class="post-header">
          <h3 class="event-name">{{ event.eventName }}</h3>
        </div>
        <div id="post_back" class="post-content">
          <div class="post-text">
            <p class="event-description">{{ event.eventDescription }}</p>
          </div>
          <div class="post-photos">
            <img
              v-for="(photo, index) in event.photos"
              :src="photo"
              :alt="'photo' + index"
              :key="index"
              class="post-photo"
            />
          </div>
        </div>
        <div class="post-footer">
          <p class="date">{{ formatDate(event.eventDate) }}</p>
          <p><strong>Address:</strong> {{ event.eventAddress }}</p>
          <p><strong>Type:</strong> {{ event.eventType }}</p>
        </div>
        <div class="post-actions">
          <button class="like-button" :class="{ 'liked': event.liked }" @click="toggleLike(event)">
            <i class="heart-icon" :class="{ 'fas': event.liked, 'far': !event.liked }"></i>
            <span>{{ event.likes }}</span>
          </button>
        </div>
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
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    toggleLike(event) {
      event.liked = !event.liked;
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin-top: 10vh;
}

.posts {
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.post {
  background: radial-gradient(circle, #46D115, #2CA603);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: #000000;
}

.post-header {
  margin-bottom: 1rem;
}

.event-name {
  font-size: 1.6rem;
  font-weight: bold;
  color: #000000;
}

.post-content {
  margin-bottom: 1rem;
}

.post-text {
  margin-bottom: 1.5rem;
}

.event-description {
  color: #000000;
  font-size: 1.1rem;
  line-height: 1.4;
}

.post-photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.post-photo {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

.post-footer {
  margin-top: 1rem;
  color: #000000;
}

.date {
  font-size: 0.9rem;
  color: #000000;
  margin-bottom: 0.5rem;
}

.post-actions {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.like-button {
  background-color: transparent;
  color: #000000;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.heart-icon {
  font-size: 1rem;
  margin-right: 0.5rem;
}

.like-button.liked .heart-icon {
  color: #ff0000;
}

.like-button span {
  margin-left: 0.25rem;
  font-size: 0.9rem;
}

.like-button:focus {
  outline: none;
}
</style>
