const router = require('express').Router()
const mongodb = require('mongodb');

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/pet_the_shop';

//########################################### GET ########################################//
router.get('/', async (req, res) => {
    try {
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('users');
        const users = await collection.find().toArray();
        for(let i = 0; i < users.length; i++)
        users[i].id = users[i]._id.toString()
        client.close();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('users');
        const user = await collection.findOne({ _id: new mongodb.ObjectId(userId) });
        user.id = user._id.toString()
        client.close();
        
        if (!user) {
            res.status(404).json({ error: 'user not found' });
            return;
        }
        
        user.id = user._id.toString();
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

//########################################### DELETE ########################################//
router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('users');
        const result = await collection.deleteOne({ _id: new mongodb.ObjectId(userId) });
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
        const userId = req.params.id;
        const updatedUser = req.body; // Assuming the updated data is sent in the request body
    
        // console.log("userId = ", userId);
        // console.log("updatedUser = ", updatedUser);
    
        const { _id, ...updatedUserWithoutId } = updatedUser; // Exclude _id field from updatedUser
    
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('users');
        const result = await collection.updateOne(
        { _id: new mongodb.ObjectId(userId) },
        { $set: updatedUserWithoutId } // Use updatedUserWithoutId in the $set operation
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
        const collection = db.collection('users');
        const result = await collection.insertOne(newData);
        client.close();
    
        if (result.acknowledged === true) {
        res.status(201).json({ message: 'User created successfully' });
        } else {
        res.status(500).json({ error: 'Failed to create User' });

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create User' });
    }
});

module.exports = router
