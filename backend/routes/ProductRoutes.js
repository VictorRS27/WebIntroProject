const router = require('express').Router()
const Product = require('../models/Product')
const mongodb = require('mongodb');

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/pet_the_shop';

//########################################### GET ########################################//
router.get('/', async (req, res) => {
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

router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('products');
        const product = await collection.findOne({ _id: new mongodb.ObjectId(productId) });
        product.id = product._id.toString()
        client.close();
        
        if (!product) {
            res.status(404).json({ error: 'product not found' });
            return;
        }
        
        product.id = product._id.toString();
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});

//########################################### DELETE ########################################//
router.delete('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('products');
        const result = await collection.deleteOne({ _id: new mongodb.ObjectId(productId) });
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
        const productId = req.params.id;

        console.log('productId = ', productId)

        const updatedProduct = req.body; // Assuming the updated data is sent in the request body
    
        console.log('updatedProduct = ', updatedProduct)

        const { _id, ...updatedProductWithoutId } = updatedProduct; // Exclude _id field from updatedProduct
    
        const client = await mongodb.MongoClient.connect(mongoURL);
        const db = client.db();
        const collection = db.collection('products');
        const result = await collection.updateOne(
        { _id: new mongodb.ObjectId(productId) },
        { $set: updatedProductWithoutId } // Use updatedProductWithoutId in the $set operation
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
        const collection = db.collection('products');
        const result = await collection.insertOne(newData);
        client.close();
    
        if (result.acknowledged === true) {
        res.status(201).json({ message: 'Product created successfully' });
        } else {
        res.status(500).json({ error: 'Failed to create Product' });

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create Product' });
    }
});


// POST TEST USING PRODUCT MODEL
// router.post('/', async (req, res) => {

//     const {
//         id, 
//         productName, 
//         productPrice, 
//         productDescription,
//         productShortDescription, 
//         photos, 
//         quantityInStock, 
//         quantitySold 
//     } = req.body

//     if(!productName) {
//         res.status(422).json({ error : "Product name is mandatory!"})
//     }

//     const product = {
//         id, 
//         productName, 
//         productPrice, 
//         productDescription,
//         productShortDescription, 
//         photos, 
//         quantityInStock, 
//         quantitySold 
//     }

//     try {
//         await Product.create(product)
//         res.status(201).json({ message :  "Product inserted in the database!"})
//     } catch (error) {
//         res.status(500).json({ error : error})
//     }
// })

module.exports = router
