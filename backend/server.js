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
        client.close();
        res.json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch cart' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});