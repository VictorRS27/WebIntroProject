const mongodb = require('mongodb');
const db = require('../db');
const collection = db.collection('cart');

module.exports = {
  getAllCarts: async (req, res) => {
    try {
      const carts = await collection.find().toArray();

      for (let i = 0; i < carts.length; i++) {
        carts[i].id = carts[i]._id.toString();
      }

      res.json(carts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch carts' });
    }
  },

  getCartById: async (req, res) => {
    try {
      const cartId = req.params.id;
      const cart = await collection.findOne({ _id: new mongodb.ObjectId(cartId) });

      if (!cart) {
        res.status(404).json({ error: 'Cart not found' });
        return;
      }

      cart.id = cart._id.toString();
      res.json(cart);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch cart' });
    }
  },

  deleteCart: async (req, res) => {
    try {
      const cartId = req.params.id;
      const result = await collection.deleteOne({ _id: new mongodb.ObjectId(cartId) });

      if (result.deletedCount === 1) {
        res.json({ message: 'Cart deleted successfully' });
      } else {
        res.status(404).json({ error: 'Cart not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to delete cart' });
    }
  },

  updateCart: async (req, res) => {
    try {
      const cartId = req.params.id;
      const updatedCart = req.body;
      const { _id, ...updatedCartWithoutId } = updatedCart;

      const result = await collection.updateOne(
        { _id: new mongodb.ObjectId(cartId) },
        { $set: updatedCartWithoutId }
      );

      if (result.acknowledged === true) {
        res.json({ message: 'Cart updated successfully' });
      } else {
        res.status(404).json({ error: 'Cart not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update cart' });
    }
  },

  createCart: async (req, res) => {
    try {
      const newCart = req.body;
      const result = await collection.insertOne(newCart);

      if (result.acknowledged === true) {
        res.status(201).json({ message: 'Cart created successfully' });
      } else {
        res.status(500).json({ error: 'Failed to create cart' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create cart' });
    }
  },
};
