const express = require('express');
const Organizer = require('../models/Organizer');
const router = express.Router();

// Add Organizer
router.post('/', async (req, res) => {
  try {
    const organizer = new Organizer(req.body);
    const savedOrganizer = await organizer.save();
    res.status(201).json(savedOrganizer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Organizers
router.get('/', async (req, res) => {
  try {
    const organizers = await Organizer.find().populate('events');
    res.status(200).json(organizers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
