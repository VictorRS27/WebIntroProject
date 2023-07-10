const { ObjectId } = require('mongodb');
const { getDB } = require('../db'); // Import the database connection object

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const db = getDB();
      const products = await db.collection('products').find().toArray();

      products.forEach(product => {
        product.id = product._id.toString();
      });

      res.json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  },

  getProductById: async (req, res) => {
    try {
      const db = getDB();
      const productId = req.params.id;
      const product = await db.collection('products').findOne({ _id: new ObjectId(productId) });

      if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }

      product.id = product._id.toString();
      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const db = getDB();
      const productId = req.params.id;
      const result = await db.collection('products').deleteOne({ _id: new ObjectId(productId) });

      if (result.deletedCount === 1) {
        res.json({ message: 'Product deleted successfully' });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to delete product' });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const db = getDB();
      const productId = req.params.id;
      const updatedProduct = req.body;
      const { _id, ...updatedProductWithoutId } = updatedProduct;

      const result = await db.collection('products').updateOne(
        { _id: new ObjectId(productId) },
        { $set: updatedProductWithoutId }
      );

      if (result.acknowledged === true) {
        res.json({ message: 'Product updated successfully' });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update product' });
    }
  },

  createProduct: async (req, res) => {
    try {
      const db = getDB();
      const newData = req.body;

      const result = await db.collection('products').insertOne(newData);

      if (result.acknowledged === true) {
        res.status(201).json({ message: 'Product created successfully' });
      } else {
        res.status(500).json({ error: 'Failed to create product' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create product' });
    }
  },
};
