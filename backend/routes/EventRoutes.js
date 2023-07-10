const router = require('express').Router();
const EventController = require('../controllers/EventController');

router.get('/', EventController.getAllEvents);
router.get('/:id', EventController.getEventById);
router.delete('/:id', EventController.deleteEvent);
router.put('/:id', EventController.updateEvent);
router.post('/', EventController.createEvent);

module.exports = router;
