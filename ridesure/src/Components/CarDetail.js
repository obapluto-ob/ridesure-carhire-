// src/components/CarDetail.js
import React from 'react';

const CarDetail = ({ car }) => {
  if (!car) return <p>No car selected.</p>;

  return (
    <div className="car-detail p-4 max-w-2xl mx-auto bg-white shadow-lg rounded-2xl">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{car.name}</h2>
      <p className="text-gray-700 mb-1">Model: {car.model}</p>
      <p className="text-gray-700 mb-1">Year: {car.year}</p>
      <p className="text-gray-700 mb-1">Price per day: ${car.price}</p>
      <p className="text-gray-600 mt-4">{car.description}</p>
    </div>
  );
};

export default CarDetail;
