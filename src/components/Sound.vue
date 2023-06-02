<template>
  <div class="sound-player" @mousemove="playSound">
    <h2>Sound Player</h2>
    <button class="play-button">Play Sound</button>
  </div>
</template>

<script>
export default {
  name: "Sound",
  data() {
    return {
      audio: new Audio()
    };
  },
  mounted(){
    document.addEventListener('mousemove', this.playSound);
  },
  methods: {
    
    playSound() {
      //console.log("move")
      const soundID = Math.floor(Math.random() * 7);
      const soundsList = [
        "/cat-meow-6226.mp3",
        "/zimmermacaco.mp3",
        "/sheep-122256.mp3",
        "/duck-quack-112941.mp3",
        "/elephant-trumpets-growls-6047.mp3",
        "/owl-144750.mp3",
        "/pet-squeak-toy-81315.mp3"
      ];
      this.audio.src = soundsList[soundID]; // Replace with the path to your sound file
      //this.audio.play();
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
