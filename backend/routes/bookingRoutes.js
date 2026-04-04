const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// CREATE booking (REAL SAVE)
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);

    const savedBooking = await booking.save();

    res.json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
