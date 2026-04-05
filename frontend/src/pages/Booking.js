import { useState } from "react";
import axios from "axios";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    guests: "",
    date: "",
    category: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://3.106.60.185:5000/api/bookings",
        form,
        {
          headers: { Authorization: token },
        }
      );

      alert("Booking created!");
    } catch (err) {
      alert("Booking failed");
    }
  };

  return (
    <div>
      <h2>Booking Here!</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />

      <input name="guests" placeholder="Guests" onChange={handleChange} />
      <input type="date" name="date" onChange={handleChange} />

      <input name="category" placeholder="Event Category" onChange={handleChange} />

      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default Booking;