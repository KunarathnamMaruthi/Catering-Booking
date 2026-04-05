import { useEffect, useState } from "react";
import axios from "axios";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  const token = localStorage.getItem("token");

  const fetchBookings = async () => {
    const res = await axios.get(
      "http://3.106.60.185:5000/api/bookings",
      { headers: { Authorization: token } }
    );
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // ❌ DELETE
  const handleDelete = async (id) => {
    await axios.delete(
      `http://3.106.60.185:5000/api/bookings/${id}`,
      { headers: { Authorization: token } }
    );
    alert("Booking cancelled");
    fetchBookings();
  };

  // ✏️ EDIT (simple example)
  const handleEdit = async (id) => {
    const newGuests = prompt("Enter new guest count:");

    await axios.put(
      `http://3.106.60.185:5000/api/bookings/${id}`,
      { guests: newGuests },
      { headers: { Authorization: token } }
    );

    alert("Booking updated");
    fetchBookings();
  };

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.map((b) => (
        <div key={b._id} style={{ border: "1px solid black", margin: "10px" }}>
          <p>Name: {b.name}</p>
          <p>Date: {b.date}</p>
          <p>Guests: {b.guests}</p>

          <button onClick={() => handleEdit(b._id)}>Edit</button>
          <button onClick={() => handleDelete(b._id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;