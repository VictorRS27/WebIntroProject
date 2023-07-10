//  initial configuration
const express = require('express');
const axios = require('axios');
const mongodb = require('mongodb');
const cors = require('cors');
const app = express();


app.use(cors({
    origin: 'http://localhost:5173' // substitua pelo domínio que deseja permitir
}));

//  ways to read JSON
app.use(express.urlencoded({ extended: true,}))
app.use(express.json())

// routes
const ProductRoutes = require('./routes/ProductRoutes')
const EventRoutes = require('./routes/EventRoutes')
const UserRoutes = require('./routes/UserRoutes')
const AdminRoutes = require('./routes/AdminRoutes')
const CartRoutes = require('./routes/CartRoutes')

app.use('/products', ProductRoutes)
app.use('/events', EventRoutes)
app.use('/users', UserRoutes)
app.use('/admin', AdminRoutes)
app.use('/cart', CartRoutes)

//  Listening in the port 3000
app.listen(3000)