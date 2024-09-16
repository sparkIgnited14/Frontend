import React from 'react';
import './ETWDCEvent.css'; // Optional: Import CSS file for styling
import Nav from '../../nav';
import Footer from '../../footer';

const ETWDCEvent = () => {
  return (
    <div>
        <Nav />
    <div className="etwdc-event">
      {/* YouTube Video */}
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/jT_trMdfrdA"
          title="ETWDC Event Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Event Information */}
      <div className="event-info">
        <h2>About the ETWDC Event</h2>
        <p>
          The Electric Two-Wheeler Design Challenge (ETWDC) is a pioneering event that showcases innovation in electric mobility. Our team participated in this prestigious event, where we designed and built an advanced electric two-wheeler. The event provided us with a platform to demonstrate our technical expertise, creativity, and commitment to sustainable transportation.
        </p>
      </div>

      {/* Achievements Section */}
      <div className="achievements">
        <h2>Our Achievements in ETWDC</h2>
        <ul>
          <li>1st Place in the Design Innovation Category</li>
          <li>Awarded Best Electric Performance</li>
          <li>Recognized for Sustainable Engineering Practices</li>
          <li>Featured in the ETWDC Event Highlights</li>
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ETWDCEvent;
