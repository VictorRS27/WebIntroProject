const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017';
const dbName = 'pet_the_shop';

let db;

// Establish the database connection
MongoClient.connect(mongoURL, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    console.log('MongoDB connected successfully');
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
  });

module.exports = {
  getDB: () => db
};
