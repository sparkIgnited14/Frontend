import React from 'react';
import './ETWDCEvent.css'; // Optional: Import CSS file for styling
import Nav from '../../nav';
import Footer from '../../footer';

const SIEPEvent = () => {
  return (
    <div>
        <Nav />
    <div className="etwdc-event">
      {/* YouTube Video */}
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/B7SiedhzJ6E"
          title="ETWDC Event Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Event Information */}
      <div className="event-info">
        <h2>About the SIEP Event</h2>
        <p>
        The Student Innovation and Entrepreneurship Program (SIEP) is an inspiring event that brings together young innovators and entrepreneurs to showcase their groundbreaking projects. Our team participated in this event with a focus on electric vehicle technology, demonstrating our dedication to sustainable mobility solutions. SIEP provided us with an invaluable platform to learn, collaborate, and contribute to the future of transportation.
        </p>
      </div>

      {/* Achievements Section */}
      <div className="achievements">
        <h2>Our Achievements in SIEP</h2>
        <ul>
        <li>Winner of the Most Innovative Project Award</li>
          <li>Finalists in the Sustainable Transportation Challenge</li>
          <li>Received Special Recognition for Community Impact</li>
          <li>Highlighted in the SIEP Innovation Showcase</li>
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SIEPEvent;
