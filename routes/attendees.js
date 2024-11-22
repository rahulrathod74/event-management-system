const express = require('express');
const Attendee = require('../models/Attendee');
const router = express.Router();

// Add Attendee
router.post('/', async (req, res) => {
  try {
    const attendee = new Attendee(req.body);
    const savedAttendee = await attendee.save();
    res.status(201).json(savedAttendee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Attendees
router.get('/', async (req, res) => {
  try {
    const attendees = await Attendee.find().populate('registrations');
    res.status(200).json(attendees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
