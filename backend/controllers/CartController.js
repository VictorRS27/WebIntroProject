const { ObjectId } = require('mongodb');
const { getDB } = require('../db'); // Import the database connection object

module.exports = {
  getAllCarts: async (req, res) => {
    try {
      const db = getDB();
      const carts = await db.collection('cart').find().toArray();

      carts.forEach(cart => {
        cart.id = cart._id.toString();
      });

      res.json(carts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch carts' });
    }
  },

  getCartById: async (req, res) => {
    try {
      const db = getDB();
      const cartId = req.params.id;
      const cart = await db.collection('cart').findOne({ _id: new ObjectId(cartId) });

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
      const db = getDB();
      const cartId = req.params.id;
      const result = await db.collection('cart').deleteOne({ _id: new ObjectId(cartId) });

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
      const db = getDB();
      const cartId = req.params.id;
      const updatedCart = req.body;
      const { _id, ...updatedCartWithoutId } = updatedCart;

      const result = await db.collection('cart').updateOne(
        { _id: new ObjectId(cartId) },
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
      const db = getDB();
      const newCart = req.body;
      const result = await db.collection('cart').insertOne(newCart);

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
