const router = require('express').Router()
const mongodb = require('mongodb');

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/pet_the_shop';

//########################################### GET ########################################//
router.get('/', async (req, res) => {
    try {
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('cart');
        const cart = await collection.find().toArray();
        for(let i = 0; i < cart.length; i++)
        cart[i].id = cart[i]._id.toString()
        client.close();
        res.json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch cart' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const adminId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('cart');
        const cart = await collection.findOne({ _id: new mongodb.ObjectId(adminId) });
        cart.id = cart._id.toString()
        client.close();
        
        if (!cart) {
            res.status(404).json({ error: 'cart not found' });
            return;
        }
        
        cart.id = cart._id.toString();
        res.json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch cart' });
    }
});


//########################################### DELETE ########################################//
router.delete('/:id', async (req, res) => {
    try {
        const cartId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('cart');
        const result = await collection.deleteOne({ _id: new mongodb.ObjectId(cartId) });
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
        const collection = db.collection('cart');
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
        const collection = db.collection('cart');
        const result = await collection.insertOne(newData);
        client.close();
    
        if (result.acknowledged === true) {
        res.status(201).json({ message: 'Cart created successfully' });
        } else {
        res.status(500).json({ error: 'Failed to create Cart' });

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create Cart' });
    }
});

module.exports = router
