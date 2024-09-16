import React from 'react';
import { Link } from 'react-router-dom';
import './bikeInfo.css';

const Vehicles = () => {
  const vehicles = [
    {
      id: 'shadow-1.0',
      name: 'Shadow 1.0',
      description: 'A powerful electric bike with 35Km range, designed for urban mobility.',
      image: '../20240218_142244.jpg', // Replace with actual image URL
    },
    {
      id: 'shadow-2.0',
      name: 'Shadow 2.0',
      description: 'An eco-friendly scooter with a sleek design and a range of 45km.',
      image: '../ather-delivers-250-450x-electric-scooters-in-the-same-day-3-1666601920.jpg', // Replace with actual image URL
    },
    {
      id: 'electric-bike-model-z',
      name: 'Electric Bike Model Z',
      description: 'coming soon.....',
      image: '../ather-delivers-250-450x-electric-scooters-in-the-same-day-3-1666601920.jpg', // Replace with actual image URL
    },
  ];

  return (
    <section className="vehicles-section" id="vehicles">
      <div className="vehicles-grid">
        {vehicles.map((vehicle) => (
          <Link to={`/vehicle/${vehicle.id}`} key={vehicle.id} className="vehicle-card">
            <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
            <div className="vehicle-info">
              <h3>{vehicle.name}</h3>
              <p>{vehicle.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Vehicles;
