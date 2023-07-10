const { ObjectId } = require('mongodb');
const { getDB } = require('../db'); // Import the database connection object

module.exports = {
  getAllAdmins: async (req, res) => {
    try {
      const db = getDB();
      const admins = await db.collection('admin').find().toArray();

      admins.forEach(admin => {
        admin.id = admin._id.toString();
      });

      res.json(admins);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch admins' });
    }
  },

  getAdminById: async (req, res) => {
    try {
      const db = getDB();
      const adminId = req.params.id;
      const admin = await db.collection('admin').findOne({ _id: new ObjectId(adminId) });

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
      const db = getDB();
      const adminId = req.params.id;
      const result = await db.collection('admin').deleteOne({ _id: new ObjectId(adminId) });

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
      const db = getDB();
      const adminId = req.params.id;
      const updatedAdmin = req.body;
      const { _id, ...updatedAdminWithoutId } = updatedAdmin;

      const result = await db.collection('admin').updateOne(
        { _id: new ObjectId(adminId) },
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
      const db = getDB();
      const newAdmin = req.body;
      const result = await db.collection('admin').insertOne(newAdmin);

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
