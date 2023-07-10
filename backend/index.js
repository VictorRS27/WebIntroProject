const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db'); // Custom module for database connection

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
const ProductRoutes = require('./routes/ProductRoutes');
const EventRoutes = require('./routes/EventRoutes');
const UserRoutes = require('./routes/UserRoutes');
const AdminRoutes = require('./routes/AdminRoutes');
const CartRoutes = require('./routes/CartRoutes');

app.use('/products', ProductRoutes);
app.use('/events', EventRoutes);
app.use('/users', UserRoutes);
app.use('/admin', AdminRoutes);
app.use('/cart', CartRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
