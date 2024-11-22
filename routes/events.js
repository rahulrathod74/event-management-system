const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Add Event
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('organizer attendees');
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
