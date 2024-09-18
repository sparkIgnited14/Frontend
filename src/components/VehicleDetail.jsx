import React from 'react';
import { useParams } from 'react-router-dom';
import './vehicleDetail.css'; 
import Nav from '../nav';
import Footer from '../footer';

const vehicleData = {
  'shadow-1.0': {
    name: 'Shadow 1.0',
    description: 'A powerful electric bike with 35Km range, designed for urban mobility.',
    image: '../20240218_142244.jpg', // Replace with actual image URL
    details: {
      motor: '1000w, BLDC mid drive',
      battery: '24AH LiFePo4',
      charging: '330w fast charge',
      torque: '33nm @450 RPM',
      payload: '90KG',
      wheels: '12 inch',
      range: '35 km',
      speed: '60 kmph',
    },
  },
  'shadow-2.0': {
    name: 'Shadow 2.0',
    description: 'An eco-friendly scooter with a sleek design and a range of 45km.',
    image: '../ather-delivers-250-450x-electric-scooters-in-the-same-day-3-1666601920.jpg', // Replace with actual image URL
    details: {
      motor: '1200w, BLDC hub motor',
      battery: '30AH Li-ion',
      charging: '350w fast charge',
      torque: '40nm @500 RPM',
      payload: '100KG',
      wheels: '14 inch',
      range: '45 km',
      speed: '70 kmph',
    },
  },
  'electric-bike-model-z': {
    name: 'Electric Bike Model Z',
    description: 'An efficient bike perfect for city commuting, offering a smooth ride.',
    image: '../ather-delivers-250-450x-electric-scooters-in-the-same-day-3-1666601920.jpg', // Replace with actual image URL
    details: {
      motor: '....',
      battery: '....',
      charging: '....',
      torque: '....',
      payload: '....',
      wheels: '....',
      range: '....',
      speed: '....',
    },
  },
};

const VehicleDetail = () => {
  const { vehicleId } = useParams();
  const vehicle = vehicleData[vehicleId];

  if (!vehicle) {
    return <h2>Vehicle not found</h2>;
  }

  return (
    <div>
        <Nav />
    <div className="vehicle-detail">
      <h2>{vehicle.name}</h2>
      <img src={vehicle.image} alt={vehicle.name} className="vehicle-detail-image" />
      <p>{vehicle.description}</p>
      <h3>Specifications:</h3>
      <div className="specs-grid">
        {Object.entries(vehicle.details).map(([key, value]) => (
          <div className="spec-card" key={key}>
            <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default VehicleDetail;
