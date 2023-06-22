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

//#########################################################################################################################
//                                                  GET                                                                  //
//#########################################################################################################################

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
        //console.log("EVENTS : ", events)
        res.json(events);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

app.get('/events/:id', async (req, res) => {
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

app.get('/products/:id', async (req, res) => {
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

app.get('/users/:id', async (req, res) => {
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

app.get('/admin/:id', async (req, res) => {
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

app.get('/cart/:id', async (req, res) => {
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

//#########################################################################################################################
//                                                  DELETE                                                               //
//#########################################################################################################################

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

//#########################################################################################################################
//                                                  PUT                                                                 //
//#########################################################################################################################

app.put('/events/:id', async (req, res) => {
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

app.put('/admin/:id', async (req, res) => {
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

app.put('/users/:id', async (req, res) => {
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

app.put('/products/:id', async (req, res) => {
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

app.put('/cart/:id', async (req, res) => {
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
      


//#########################################################################################################################
//                                                  POST                                                                 //
//#########################################################################################################################
app.post('/products', async (req, res) => {
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

app.post('/users', async (req, res) => {
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

app.post('/admin', async (req, res) => {
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

app.post('/events', async (req, res) => {
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

app.post('/cart', async (req, res) => {
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
    
    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });