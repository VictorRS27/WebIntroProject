const mongodb = require('mongodb');
const db = require('../db'); // Import the database connection object
const Product = require('../models/Product');

module.exports = {
    getAllProducts: async (req, res) => {
        try {
            const collection = db.collection('products');
            const products = await collection.find().toArray();
            
            for (let i = 0; i < products.length; i++) {
                products[i].id = products[i]._id.toString();
            }
            
            res.json(products);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    },
    
    getProductById: async (req, res) => {
        try {
            const productId = req.params.id;
            const collection = db.collection('products');
            const product = await collection.findOne({ _id: new mongodb.ObjectId(productId) });
            
            if (!product) {
                res.status(404).json({ error: 'Product not found' });
                return;
            }
            
            product.id = product._id.toString();
            res.json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to fetch product' });
        }
    },
    
    deleteProduct: async (req, res) => {
        try {
            const productId = req.params.id;
            const collection = db.collection('products');
            const result = await collection.deleteOne({ _id: new mongodb.ObjectId(productId) });
            
            if (result.deletedCount === 1) {
                res.json({ message: 'Product deleted successfully' });
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to delete product' });
        }
    },
    
    updateProduct: async (req, res) => {
        try {
            const productId = req.params.id;
            const updatedProduct = req.body;
            const { _id, ...updatedProductWithoutId } = updatedProduct;
            
            const collection = db.collection('products');
            const result = await collection.updateOne(
                { _id: new mongodb.ObjectId(productId) },
                { $set: updatedProductWithoutId }
                );
                
                if (result.acknowledged === true) {
                    res.json({ message: 'Product updated successfully' });
                } else {
                    res.status(404).json({ error: 'Product not found' });
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({ error: 'Failed to update product' });
            }
        },
        
        createProduct: async (req, res) => {
            try {
                const newData = req.body;
                const collection = db.collection('products');
                const result = await collection.insertOne(newData);
                
                if (result.acknowledged === true) {
                    res.status(201).json({ message: 'Product created successfully' });
                } else {
                    res.status(500).json({ error: 'Failed to create product' });
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({ error: 'Failed to create product' });
            }
        },
    };
    