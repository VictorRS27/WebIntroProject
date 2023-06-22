const express = require('express');
const axios = require('axios');
const mongodb = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/pet_the_shop';


// ...

app.use(cors({
    origin: 'http://localhost:5173' // substitua pelo domínio que deseja permitir
}));


// Middleware for parsing JSON data
app.use(express.json());

// Fetch events from MongoDB
app.get('/events', async (req, res) => {
    try {
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('events');
        const events = await collection.find().toArray();
        client.close();
        for(let i = 0; i < events.length; i++)
        events[i].id = events[i]._id.toString()
        console.log("EVENTS : ", events)
        res.json(events);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

app.get('/products', async (req, res) => {
    try {
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('products');
        const products = await collection.find().toArray();
        client.close();
        for(let i = 0; i < products.length; i++)
        products[i].id = products[i]._id.toString()
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

app.get('/users', async (req, res) => {
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

app.get('/admin', async (req, res) => {
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

app.get('/cart', async (req, res) => {
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

app.delete('/events/:id', async (req, res) => {
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

app.delete('/admin/:id', async (req, res) => {
    try {
        const adminId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('admin');
        const result = await collection.deleteOne({ _id: new mongodb.ObjectId(adminId) });
        client.close();

        console.log('result=', result)
        
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

app.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('users');
        const result = await collection.deleteOne({ _id: new mongodb.ObjectId(userId) });
        client.close();

        console.log('result=', result)
        
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

app.delete('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('products');
        const result = await collection.deleteOne({ _id: new mongodb.ObjectId(productId) });
        client.close();

        console.log('result=', result)
        
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

app.delete('/cart/:id', async (req, res) => {
    try {
        const cartId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('cart');
        const result = await collection.deleteOne({ _id: new mongodb.ObjectId(cartId) });
        client.close();

        console.log('result=', result)
        
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

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});