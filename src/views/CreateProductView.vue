<template>
  <Navbar />

    <div class="box">
      <h2>Create Product</h2>

      <div class="side_form">
        <InputText label="Nome" placeholder="A pet friend product" v-model:value="productName" />
        <InputText label="Preço" placeholder="A pet friend product" v-model:value="productPrice" />
      </div>
      <InputText label="Descrição" placeholder="A pet friend product" v-model:value="productDescription" />

      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" id="price" placeholder="Enter product price" v-model="productPrice" />
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" placeholder="Enter product description" v-model="productDescription"></textarea>
      </div>

      <div class="form-group">
        <label for="photos">Photos:</label>
        <input type="file" id="photos" @change="handlePhotoUpload" multiple />
        <div class="photos-preview">
          <div v-for="(photo, index) in photos" :key="index" class="photo">
            <img :src="photo" alt="Product Photo" />
            <button class="delete-button" @click="deletePhoto(index)">Delete</button>
          </div>
        </div>
        <button class="upload-button">Upload Photos</button>
      </div>

      <div class="form-group">
        <label for="quantity">Quantity in Stock:</label>
        <input type="number" id="quantity" placeholder="Enter quantity in stock" v-model="quantityInStock" />
      </div>

      <button class="submit-button">Submit</button>
    </div>
</template>
  

<script>
import InputText from '../components/InputText.vue';
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
    InputText
  },
  data() {
    return {
      productName: '',
      productPrice: '',
      productDescription: '',
      photos: [],
      quantityInStock: ''
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
    }
  }

}
</script>
<style scoped>
.box {
  margin-top: 15vh;
  margin-bottom: 5vh;
}

.create-products {
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.side_form {
  display: flex;
}

.side_form input {
  margin: 10px;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 0px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
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