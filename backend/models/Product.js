const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: String,
  productName: String,
  productPrice: Number,
  productDescription: String,
  productShortDescription: String,
  photos: Array,
  quantityInStock: Number,
  quantitySold: Number,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
