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

//UPDATE BOOKING
router.put("/:id", async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

//DELETE BOOKING
router.delete("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking cancelled" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});
module.exports = router;
