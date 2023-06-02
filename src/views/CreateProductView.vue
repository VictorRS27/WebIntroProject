<template>
  <Navbar/>
  <div class="container">
    <div class="box">
      <h2>Create Product</h2>

      <!-- Display warning for empty required fields -->
      <div v-show="showEmptyFieldsWarning" class="warning-text">Please fill in all required fields!</div>

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
        <textarea id="description" placeholder="Enter product description" v-model="productDescription"
          class="styled-input"></textarea>
      </div>

      <div class="form-group">
        <label for="shortDescription">Short Description:</label>
        <input type="text" id="shortDescription" placeholder="Enter short description" v-model="productShortDescription"
          class="styled-input" />
      </div>

      <div class="form-group">
        <label for="photo1">Photo 1:</label>
        <input type="text" id="photo1" placeholder="Enter photo link" v-model="photoLinks[0]" class="styled-input" />
      </div>

      <div class="form-group">
        <label for="photo2">Photo 2:</label>
        <input type="text" id="photo2" placeholder="Enter photo link" v-model="photoLinks[1]" class="styled-input" />
      </div>

      <div class="form-group">
        <label for="photo3">Photo 3:</label>
        <input type="text" id="photo3" placeholder="Enter photo link" v-model="photoLinks[2]" class="styled-input" />
      </div>

      <div class="form-group">
        <label for="photo4">Photo 4:</label>
        <input type="text" id="photo4" placeholder="Enter photo link" v-model="photoLinks[3]" class="styled-input" />
      </div>

      <div class="form-group">
        <label for="quantity">Quantity in Stock:</label>
        <input type="number" id="quantity" placeholder="Enter quantity in stock" v-model="quantityInStock"
          class="styled-input" />
      </div>

      <button class="submit-button" @click="submitForm">Submit</button>
    </div>
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
      productShortDescription: '',
      photoLinks: ['', '', '', ''],
      quantityInStock: '',
      showEmptyFieldsWarning: false // Track empty fields warning
    };
  },
  methods: {
    submitForm() {
      // Check for empty required fields
      if (
        !this.productName ||
        !this.productPrice ||
        !this.productShortDescription ||
        !this.productDescription ||
        !this.quantityInStock
      ) {
        this.showEmptyFieldsWarning = true;
        return;
      }

      // Create the JSON object
      const newProduct = {
        productName: this.productName,
        productPrice: this.productPrice,
        productDescription: this.productDescription,
        productShortDescription: this.productShortDescription,
        photos: this.photoLinks.filter(link => link), // Remove empty photo links
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
      this.productShortDescription = '';
      this.photoLinks = ['', '', '', ''];
      this.quantityInStock = '';
      this.showEmptyFieldsWarning = false;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  margin-top: 20vh;
  margin-bottom: 10vh;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


h2 {
  text-align: center;
}
</style>
