<template>
    <!-- <div class="sound-player">
      <h2>Sound Player</h2>
      <button class="play-button" @click="playSound">Play Sound</button>
    </div> -->
  </template>
  
  <script>

  export default {
    name: "Sound",
    data() {
      return {
        audio: new Audio(),
        interval: null
      };
    },
    mounted() {
      this.setRandomInterval();
    },
    methods: {
      setRandomInterval() {
        const minDelay = 4000; // Minimum delay in milliseconds
        const maxDelay = 10000; // Maximum delay in milliseconds
        const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);
        this.intervalId = delay
      },
      playSound() {
        let soundID = Math.random() % 7
        const soundsList = ['public/cat-meow-6226.mp3', 'public/zimmermacaco.mp3', 'public/sheep-122256.mp3', 'public/duck-quack-112941.mp3','public/elephant-trumpets-growls-6047.mp3','public/owl-144750.mp3', 'public/pet-squeak-toy-81315.mp3']
        this.audio.src = soundsList[soundID]; // Replace with the path to your sound file
        this.audio.play();
      }
    }
  };
  </script>
  
  <style scoped>
  .sound-player {
    text-align: center;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .play-button {
    padding: 10px 20px;
    background-color: lightgreen;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  </style>
  