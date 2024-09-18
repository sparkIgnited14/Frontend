// src/components/Home.js
import React from 'react';
import Nav from '../nav';
import Footer from '../footer';
import Vehicles from './Vehicles.';
import ReviewListSmall from './review/ReviewListSmall';
import './home.css'
import { Link } from 'react-router-dom';


import VKK from '../assets/VKK Photo.jpeg.jpg';
import photo1 from '../assets/photo1.jpg';
import prishamam from '../assets/prishamam.jpg';
import Rakshit from '../assets/Rakshit Pandey.jpg';


export default function Home() {
    return (
        <div>
            < Nav />
            <div className='content'>
                {/* <!-- Hero Section --> */}
                <section class="hero">
                    <div class="hero-overlay">
                        <div class="hero-content">
                            <h1>Welcome to <br></br>Team Spark Ignited</h1>
                            <p>Discover innovation in motion with our radical electric two-wheeler</p>
                            <a href="#about" class="cta-btn">Explore Our Vision</a>
                        </div>
                    </div>
                </section>

                {/* <!-- Vision Section --> */}
                <section class="vision" id="about">
                    <h2>Our Vision</h2>
                    <p>At Team Spark Ignited, we believe in innovation that drives a cleaner, smarter, and greener future. Our radical electric two-wheeler is designed to redefine urban mobility and make sustainability a priority. We aim to bring innovation and passion to the forefront of electric vehicle design.</p>
                </section>

                {/* <!-- Meet the Team Section --> */}
                <section class="team ">
                    <div className='team-overlay'>
                    <h2>Our Vehicles </h2>
                    
                        
                            <Vehicles />
                
                    
                    {/* <a href='/bikeInfo' className="see-more-btn">See All</a> */}
                    </div>
                </section>

                
                <section class="timeline-section" id="events">
                    <h2>Events & Competitions</h2>
                    <div className="vehicles-grid">
                        
                            <div className="vehicle-card" >
                                
                                <div className="vehicle-info">
                                <img src="../saeindiaSS.jpeg" alt="vehicle.name" className="vehicle-image imgsize" />
                                    <h3>ETWDC 2023</h3>
                                    <p><b>ALL India Ranked 7 in ETWDC southern section.</b><br></br>Grabed 2nd postion in Innovation</p>

                                    <Link to='/etwdc-event' className="btn btn-primary">know More about ETWDC</Link>
                                </div>
                            </div>
                            <div className="vehicle-card" >
                                <div className="vehicle-info">
                                <img src="../ISIE-logo.png" alt="vehicle.name" className="vehicle-image imgsize" />
                                    <h3>SIEP 2024</h3>
                                    <p>Coming Soon...     </p>
                                    <br></br>  
                                    <Link to='/siep-event' className="btn btn-primary">know more about SIEP</Link>
                                </div>
                            </div>
                    </div>
                </section>
              

                <section class="team">
                <div className='team-overlay'>
                    <h2 >Meet the Team</h2>
                    <div class="team-cards">
                    <div class="team-card img1card">
                        <img src={VKK} alt="Team Member" class="team-img img1" />
                        <div class="team-info">
                            <h3>Dr. Vijay Karma</h3>
                            <p>Faculty-Advisor</p>
                        </div>
                    </div>
                    <div class="team-card img2card">
                        <img src={photo1} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Murtaza Sandalwala</h3>
                            <p>Mentor</p>
                        </div>
                    </div>
                    <div class="team-card img3card">
                        <img src={prishamam} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Prisha Chakravorty</h3>
                            <p>Mentor</p>
                        </div>
                    </div>
                    <div class="team-card rakshit">
                        <img src={Rakshit} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Rakshit Pandey</h3>
                            <p>Captain</p>
                        </div>
                    </div>
                    </div>
                    <Link to='/team' className="see-more-btn">See More</Link>
                    </div>
                </section>
                
                <section class="timeline-section reviewsection" id="events">
                    <Link to='/reviewpage' >
                    < ReviewListSmall />
                    </Link>
                    <Link to='/reviewpage' className='btn btn-primary'>See & Add More Reviews</Link>
                </section>
                

            </div>

            < Footer />

        </div>
    )
}
