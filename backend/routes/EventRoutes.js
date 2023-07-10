const router = require('express').Router()
const mongodb = require('mongodb');

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/pet_the_shop';

//########################################### GET ########################################//
router.get('/', async (req, res) => {
    try {
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('events');
        const events = await collection.find().toArray();
        client.close();
        for(let i = 0; i < events.length; i++)
        events[i].id = events[i]._id.toString()
        //console.log("EVENTS : ", events)
        res.json(events);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('events');
        const event = await collection.findOne({ _id: new mongodb.ObjectId(eventId) });
        event.id = event._id.toString()
        client.close();
        
        if (!event) {
            res.status(404).json({ error: 'Event not found' });
            return;
        }
        
        event.id = event._id.toString();
        res.json(event);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch event' });
    }
});

//########################################### DELETE ########################################//
router.delete('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('events');
        const result = await collection.deleteOne({ _id: new mongodb.ObjectId(eventId) });
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
        const collection = db.collection('events');
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
        const collection = db.collection('events');
        const result = await collection.insertOne(newData);
        client.close();
    
        if (result.acknowledged === true) {
        res.status(201).json({ message: 'Event created successfully' });
        } else {
        res.status(500).json({ error: 'Failed to create Event' });

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create Event' });
    }
});

module.exports = router
