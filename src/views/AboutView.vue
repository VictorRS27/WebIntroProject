<template>
  <div>
    <Navbar />
    <div class="container">
      <p class="description">Pet Shop Online is an e-commerce platform that offers a wide range of high-quality products and services for pet owners. They provide a convenient and reliable way to shop for pet supplies, including food, treats, toys, grooming essentials, bedding, and accessories. The website is user-friendly with intuitive search and navigation features, along with detailed product descriptions and customer reviews. They also offer services such as pet grooming, veterinary consultations, and pet adoption assistance. Customer satisfaction is their top priority, with dedicated customer support, secure online payments, and fast shipping. Pet Shop Online aims to provide a holistic pet care experience and invites pet lovers to join their community.
      </p><br>  
      <div class="people">
        <div class="person">
          <img src="public/kenzo.jpg" alt="Kenzo" />
          <p>Kenzo</p>
        </div>
        <div class="person">
          <img src="public/otavio.jpg" alt="Otavio" />
          <p>Otavio</p>
        </div>
        <div class="person">
          <img src="public/victor.jpg" alt="Victor" />
          <p>Victor</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "AboutUs",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
* {
  font-family: "Courier New", Courier, monospace;
}

.container {
  display: flex;
  justify-content: center;
  margin-top: 20vh;
  flex-direction: column;
}

.description {
  font-size: 1.5vw;
  padding: 10vh;
}

p {
  font-size: 2vw;
}

.people {
  display: flex;
  justify-content: space-evenly;
  width: 100% ;
}

.person {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.person img {
  width: 20vw;
  height: 20vw;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 3vh;
}
</style>

