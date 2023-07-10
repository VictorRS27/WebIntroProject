const mongodb = require('mongodb');
const db = require('../db');
const collection = db.collection('events');

module.exports = {
  getAllEvents: async (req, res) => {
    try {
      const events = await collection.find().toArray();

      for (let i = 0; i < events.length; i++) {
        events[i].id = events[i]._id.toString();
      }

      res.json(events);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  },

  getEventById: async (req, res) => {
    try {
      const eventId = req.params.id;
      const event = await collection.findOne({ _id: new mongodb.ObjectId(eventId) });

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
      const eventId = req.params.id;
      const result = await collection.deleteOne({ _id: new mongodb.ObjectId(eventId) });

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
      const eventId = req.params.id;
      const updatedEvent = req.body;
      const { _id, ...updatedEventWithoutId } = updatedEvent;

      const result = await collection.updateOne(
        { _id: new mongodb.ObjectId(eventId) },
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
      const newEvent = req.body;
      const result = await collection.insertOne(newEvent);

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
