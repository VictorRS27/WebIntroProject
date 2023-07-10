const { ObjectId } = require('mongodb');
const { getDB } = require('../db'); // Import the database connection object

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const db = getDB();
      const users = await db.collection('users').find().toArray();

      users.forEach(user => {
        user.id = user._id.toString();
      });

      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const db = getDB();
      const userId = req.params.id;
      const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });

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
      const db = getDB();
      const userId = req.params.id;
      const result = await db.collection('users').deleteOne({ _id: new ObjectId(userId) });

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
      const db = getDB();
      const userId = req.params.id;
      const updatedUser = req.body;
      const { _id, ...updatedUserWithoutId } = updatedUser;

      const result = await db.collection('users').updateOne(
        { _id: new ObjectId(userId) },
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
      const db = getDB();
      const newUser = req.body;
      const result = await db.collection('users').insertOne(newUser);

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
