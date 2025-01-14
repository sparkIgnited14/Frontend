import React from 'react';
import './ProfileSection.css';

import Nav from '../../nav';
import Footer from '../../footer';

import Timeline from './Timesection';


const ProfileSection = () => {
  const vehicleInfo = {
    name: 'Electric Vehicle',
    kilometersRun: 300,
    batteryHealth: 'Good',
    chargingPercentage: 80,

  };

  return (
    <>
    <Nav />
    <div>
    <div>
  <div className="profile-section timesecbody">
    <div className="content-container">
      <h1 className="heading">{vehicleInfo.name}</h1>
      <div className="info-container">
        <div className="info-item">
        <p><h4>300</h4>Km run</p>
        </div>
        <div className="divider"></div>
        <div className="info-item">
          <p><h4>500</h4>km 1st servicing </p>
        </div>
        <div className="divider"></div>
        <div className="info-item">
          <p><h4>120 Kw</h4>Power Consumed</p>
        </div>
      </div>
    </div>
  </div>
</div>




      <Timeline />
    </div>
    <Footer />

    
    </>
  );
};

export default ProfileSection;
