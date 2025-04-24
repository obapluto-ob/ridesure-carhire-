import React, { useState } from 'react';

const BookingForm = ({ car, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    pickupDate: '',
    returnDate: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({ ...formData, car });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Book {car ? car.name : 'a Car'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-2"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Info"
          className="w-full border border-gray-300 rounded-xl px-4 py-2"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="date"
            name="pickupDate"
            className="border border-gray-300 rounded-xl px-4 py-2"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="returnDate"
            className="border border-gray-300 rounded-xl px-4 py-2"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
