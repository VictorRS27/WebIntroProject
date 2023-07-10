const mongodb = require('mongodb');
const db = require('../db');
const collection = db.collection('admin');

module.exports = {
  getAllAdmins: async (req, res) => {
    try {
      const admins = await collection.find().toArray();

      for (let i = 0; i < admins.length; i++) {
        admins[i].id = admins[i]._id.toString();
      }

      res.json(admins);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch admins' });
    }
  },

  getAdminById: async (req, res) => {
    try {
      const adminId = req.params.id;
      const admin = await collection.findOne({ _id: new mongodb.ObjectId(adminId) });

      if (!admin) {
        res.status(404).json({ error: 'Admin not found' });
        return;
      }

      admin.id = admin._id.toString();
      res.json(admin);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch admin' });
    }
  },

  deleteAdmin: async (req, res) => {
    try {
      const adminId = req.params.id;
      const result = await collection.deleteOne({ _id: new mongodb.ObjectId(adminId) });

      if (result.deletedCount === 1) {
        res.json({ message: 'Admin deleted successfully' });
      } else {
        res.status(404).json({ error: 'Admin not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to delete admin' });
    }
  },

  updateAdmin: async (req, res) => {
    try {
      const adminId = req.params.id;
      const updatedAdmin = req.body;
      const { _id, ...updatedAdminWithoutId } = updatedAdmin;

      const result = await collection.updateOne(
        { _id: new mongodb.ObjectId(adminId) },
        { $set: updatedAdminWithoutId }
      );

      if (result.acknowledged === true) {
        res.json({ message: 'Admin updated successfully' });
      } else {
        res.status(404).json({ error: 'Admin not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update admin' });
    }
  },

  createAdmin: async (req, res) => {
    try {
      const newAdmin = req.body;
      const result = await collection.insertOne(newAdmin);

      if (result.acknowledged === true) {
        res.status(201).json({ message: 'Admin created successfully' });
      } else {
        res.status(500).json({ error: 'Failed to create admin' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create admin' });
    }
  },
};
