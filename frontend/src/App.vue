<template>
  <div class="app" @mousemove="handleMouseMove">
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      audio: null
    };
  },
  mounted (){
    document.cookie = ''
  },
  methods: {
    handleMouseMove() {
      if(Math.floor(Math.random() * 300) % 300 === 1){
        this.playSound();
      }
    },
    playSound() {
      const soundID = Math.floor((Math.random() * 10) % 11);
      const soundsList = [
        'public/cat-meow-6226.mp3',
        'public/sheep-122256.mp3',
        'public/duck-quack-112941.mp3',
        'public/elephant-trumpets-growls-6047.mp3',
        'public/owl-144750.mp3',
        'mixkit-angry-wild-cat-roar-89.wav',
        'mixkit-cartoon-little-cat-meow-91.wav',
        'mixkit-dog-barking-twice-1.wav',
        'mixkit-forest-bird-singing-1211.wav',
        'mixkit-melodic-songbird-chirp-67.wav'

      ];

      if (!this.audio) {
        this.audio = new Audio();
      }

      this.audio.src = soundsList[soundID]; // Replace with the path to your sound file
      this.audio.play().catch(error => {
        // Handle play() promise rejection
        console.log('Failed to play sound:', error);
      });
    }
  }
};
</script>

<style>
body {
  margin: 0%;
  height: 100vh;
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
