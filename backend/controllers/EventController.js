const { ObjectId } = require('mongodb');
const { getDB } = require('../db'); // Import the database connection object

module.exports = {
  getAllEvents: async (req, res) => {
    try {
      const db = getDB();
      const events = await db.collection('events').find().toArray();

      events.forEach(event => {
        event.id = event._id.toString();
      });

      res.json(events);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  },

  getEventById: async (req, res) => {
    try {
      const db = getDB();
      const eventId = req.params.id;
      const event = await db.collection('events').findOne({ _id: new ObjectId(eventId) });

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
  },

  deleteEvent: async (req, res) => {
    try {
      const db = getDB();
      const eventId = req.params.id;
      const result = await db.collection('events').deleteOne({ _id: new ObjectId(eventId) });

      if (result.deletedCount === 1) {
        res.json({ message: 'Event deleted successfully' });
      } else {
        res.status(404).json({ error: 'Event not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to delete event' });
    }
  },

  updateEvent: async (req, res) => {
    try {
      const db = getDB();
      const eventId = req.params.id;
      const updatedEvent = req.body;
      const { _id, ...updatedEventWithoutId } = updatedEvent;

      const result = await db.collection('events').updateOne(
        { _id: new ObjectId(eventId) },
        { $set: updatedEventWithoutId }
      );

      if (result.acknowledged === true) {
        res.json({ message: 'Event updated successfully' });
      } else {
        res.status(404).json({ error: 'Event not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update event' });
    }
  },

  createEvent: async (req, res) => {
    try {
      const db = getDB();
      const newEvent = req.body;
      const result = await db.collection('events').insertOne(newEvent);

      if (result.acknowledged === true) {
        res.status(201).json({ message: 'Event created successfully' });
      } else {
        res.status(500).json({ error: 'Failed to create event' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create event' });
    }
  },
};
