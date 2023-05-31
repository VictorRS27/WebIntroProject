<template>
  <div class="box">
    <h2>Create Product</h2>

    <!-- Display warning for empty input fields -->
    <div v-show="showEmptyFieldsWarning" class="warning">Please fill in all fields!</div>

    <div class="form-group">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" placeholder="Enter product name" v-model="productName" class="styled-input" />
    </div>

    <div class="form-group">
      <label for="price">Price:</label>
      <input type="number" id="price" placeholder="Enter product price" v-model="productPrice" class="styled-input" />
    </div>

    <div class="form-group">
      <label for="description">Description:</label>
      <textarea id="description" placeholder="Enter product description" v-model="productDescription" class="styled-input"></textarea>
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
      <input type="number" id="quantity" placeholder="Enter quantity in stock" v-model="quantityInStock" class="styled-input" />
    </div>

    <button class="submit-button" @click="submitForm">Submit</button>
  </div>
</template>

<script>
import InputText from '../components/InputText.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

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
      quantityInStock: '',
      showEmptyFieldsWarning: false // Track empty fields warning
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
    submitForm() {
      // Check for empty fields
      if (
        !this.productName ||
        !this.productPrice ||
        !this.productDescription ||
        this.photos.length === 0 ||
        !this.quantityInStock
      ) {
        this.showEmptyFieldsWarning = true;
        return;
      }

      // Create the JSON object
      const newProduct = {
        id: Date.now(), // Generate a unique ID
        productName: this.productName,
        productPrice: this.productPrice,
        productDescription: this.productDescription,
        productShortDescription: this.productDescription.substring(0, 50) + '...', // Short description is limited to 50 characters
        photos: this.photos,
        quantityInStock: this.quantityInStock
      };

      // Send the newProduct object to the JSON server
      fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Product created:', data);
          // Reset the form after successful submission
          this.resetForm();
        })
        .catch(error => {
          console.error('Error creating product:', error);
        });
    },
    resetForm() {
      this.productName = '';
      this.productPrice = '';
      this.productDescription = '';
      this.photos = [];
      this.quantityInStock = '';
      this.showEmptyFieldsWarning = false;
    }
  }
};
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
  border: none;
  border-radius: 0;
  border-bottom: 2px solid lightgreen;
  background-color: transparent;
  outline: none;
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
.warning {
  color: red;
  text-align: center;
  margin-bottom: 10px;
}
</style>

