import React from 'react';

const dummyCars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      image: 'https://source.unsplash.com/400x200/?toyota,car',
      pricePerDay: 45,
      transmission: 'Automatic',
      fuel: 'Petrol',
    },
    {
      id: 2,
      name: 'Honda Civic',
      image: 'https://source.unsplash.com/400x200/?honda,car',
      pricePerDay: 55,
      transmission: 'Manual',
      fuel: 'Diesel',
    },
    {
      id: 3,
      name: 'Tesla Model 3',
      image: 'https://source.unsplash.com/400x200/?tesla,car',
      pricePerDay: 90,
      transmission: 'Automatic',
      fuel: 'Electric',
    },
  ];
  
  const CarList = () => {
    return (
      <section className="car-list">
        <h2>Available Cars</h2>
        <div className="car-grid">
          {dummyCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    );
  };
  
  export default CarList;
  