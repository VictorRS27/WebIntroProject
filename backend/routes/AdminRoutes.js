const router = require('express').Router()
const mongodb = require('mongodb');

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/pet_the_shop';

//########################################### GET ########################################//
router.get('/', async (req, res) => {
    try {
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('admin');
        const admin = await collection.find().toArray();
        for(let i = 0; i < admin.length; i++)
        admin[i].id = admin[i]._id.toString()
        client.close();
        res.json(admin);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch admin' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const adminId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('admin');
        const admin = await collection.findOne({ _id: new mongodb.ObjectId(adminId) });
        admin.id = admin._id.toString()
        client.close();
        
        if (!admin) {
            res.status(404).json({ error: 'admin not found' });
            return;
        }
        
        admin.id = admin._id.toString();
        res.json(admin);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch admin' });
    }
});

//########################################### DELETE ########################################//
router.delete('/:id', async (req, res) => {
    try {
        const adminId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('admin');
        const result = await collection.deleteOne({ _id: new mongodb.ObjectId(adminId) });
        client.close();
        
        if (result.deletedCount === 1) {
            res.json({ message: 'Event deleted successfully' });
        } else {
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to delete event' });
    }
});


//########################################### PUT ########################################//
router.put('/:id', async (req, res) => {
    try {
        const cartId = req.params.id;
        const updatedCart = req.body; // Assuming the updated data is sent in the request body
    
        // console.log("cartId = ", cartId);
        // console.log("updatedCart = ", updatedCart);
    
        const { _id, ...updatedCartWithoutId } = updatedCart; // Exclude _id field from updatedCart
    
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('admin');
        const result = await collection.updateOne(
        { _id: new mongodb.ObjectId(cartId) },
        { $set: updatedCartWithoutId } // Use updatedCartWithoutId in the $set operation
        );
        client.close();
        console.log('result = ', result);
    
        if (result.acknowledged === true) {
        res.json({ message: 'Cart updated successfully' });
        } else {
        res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to update cart' });
    }
});

//########################################### POST ########################################//
router.post('/', async (req, res) => {
    try {
        const newData = req.body; // Assuming the new event data is sent in the request body
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('admin');
        const result = await collection.insertOne(newData);
        client.close();
    
        if (result.acknowledged === true) {
        res.status(201).json({ message: 'Admin created successfully' });
        } else {
        res.status(500).json({ error: 'Failed to create Admin' });

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create Admin' });
    }
});

module.exports = router
