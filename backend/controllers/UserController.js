const mongodb = require('mongodb');
const db = require('../db');
const collection = db.collection('users');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await collection.find().toArray();

      for (let i = 0; i < users.length; i++) {
        users[i].id = users[i]._id.toString();
      }

      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await collection.findOne({ _id: new mongodb.ObjectId(userId) });

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      user.id = user._id.toString();
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const result = await collection.deleteOne({ _id: new mongodb.ObjectId(userId) });

      if (result.deletedCount === 1) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedUser = req.body;
      const { _id, ...updatedUserWithoutId } = updatedUser;

      const result = await collection.updateOne(
        { _id: new mongodb.ObjectId(userId) },
        { $set: updatedUserWithoutId }
      );

      if (result.acknowledged === true) {
        res.json({ message: 'User updated successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = req.body;
      const result = await collection.insertOne(newUser);

      if (result.acknowledged === true) {
        res.status(201).json({ message: 'User created successfully' });
      } else {
        res.status(500).json({ error: 'Failed to create user' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  },
};
