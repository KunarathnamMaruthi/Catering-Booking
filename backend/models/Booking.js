const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

  // User Info
  name: { type: String, required: true },
  email: String,
  phone: String,
  address: String,
  zipCode: String,

  // Event Info
  eventType: String,
  guests: { type: Number, required: true },
  eventDate: { type: Date, required: true },
  time: String,
  category: String,

  // Service Info
  serviceType: String,
  package: String,

  // Status
  status: {
    type: String,
    default: 'pending'
  }

}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);