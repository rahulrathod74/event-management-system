const express = require('express');
const Registration = require('../models/Registration');
const router = express.Router();

// Add Registration
router.post('/', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    const savedRegistration = await registration.save();
    res.status(201).json(savedRegistration);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Registration
router.delete('/:id', async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
