import React from 'react';
import Nav from '../nav';
import Footer from '../footer';

import './events.css'

export default function Events() {
    return (
        <div>
              < Nav />
              <div className='event-container'>
                {/* <!-- Hero Section --> */}
                <section class="heroEv ">
                    <div class="hero-contentEv hero-overlayEv">
                        <h1>Our Journey: Competitions & Achievements</h1>
                        <p>Showcasing Our Passion for Innovation and Sustainability in Electric Vehicles</p>
                        <a href="#events" class="cta-btn">Join Our Next Event</a>
                    </div>
                </section>


                {/* <!-- Events/Competitions Cards --> */}
                <section class="event-cards">
                <div className="vehicles-grid">
                        
                        <div className="vehicle-card" >
                            
                            <div className="vehicle-info">
                            <img src="../saeindiaSS.jpeg" alt="vehicle.name" className="vehicle-image imgsize" />
                                <h3>ETWDC 2023</h3>
                                <p><b>ALL India Ranked 7 in ETWDC southern section.</b><br></br>Grabed 2nd postion in Innovation</p>

                                <a href='/etwdc-event' className="btn btn-primary">know More about ETWDC</a>
                            </div>
                        </div>
                        <div className="vehicle-card" >
                            <div className="vehicle-info">
                            <img src="../ISIE-logo.png" alt="vehicle.name" className="vehicle-image imgsize" />
                                <h3>SIEP 2024</h3>
                                <p>Coming Soon...     </p>
                                <br></br>  
                                <a href='/siep-event' className="btn btn-primary">know more about SIEP</a>
                            </div>
                        </div>
                </div>
                </section>

               
              </div>
      
            < Footer />

        </div>
    )
}