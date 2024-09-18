import React from 'react';
import Nav from '../nav';
import Footer from '../footer';


import './team.css'
import VKK from '../assets/VKK Photo.jpeg.jpg';
import photo1 from '../assets/photo.jpg';
import prishamam from '../assets/prishamam.jpg';
import Rakshit_Pandey from '../assets/Rakshit Pandey.jpg';
import Sumit from '../assets/SumitSir1.jpg';
import Piyush from '../assets/Piyush Kaushal.jpg';
import Arjun from '../assets/Arjun Kushwaha.jpg';
import Anurag from '../assets/Anurag Tiwari.jpg';
import Yash from '../assets/yash2.jpg';
import Aman from '../assets/Aman Kushwaha.jpg';
import Nidhi from '../assets/Nidhi Patel.jpg';
import Ayush from '../assets/Ayush Somkuwar.jpeg';
import Nikhil from '../assets/nikhil.jpg';
import Nayan from '../assets/Nayan Rathore.jpg';
import Saksham from '../assets/Saksham Shrivastava.jpg';
import kavyansh from '../assets/Kavyansh Saxena.jpg';
import Rahul from '../assets/rahul1.jpg';
import Shabbir from '../assets/Shabbir Mhowwala.jpg';
import Saubhagya from '../assets/SAUBHAGYA - Saubhagya Barve.jpg';
import Vikash from '../assets/Vikash Soni.jpg';
import Saharsh from '../assets/Saharsh Upadhyay.jpg';

export default function Team() {
    return (
        <div>
              < Nav />
              <div className='container-lg'>
                <h1>MEET OUR TEAM</h1>
                <div class="team-container ">
                    <div class="team-card img1card ">
                        <img src={VKK} alt="Team Member" class="team-img " />
                        <div class="team-info">
                            <h3>Dr. Vijay Karma</h3>
                            <p>Faculty-Advisor</p>
                        </div>
                    </div>
                    <div class="team-card img2card">
                        <img src={photo1} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Murtaza Sandalwala</h3>
                            <p>Mentor<br></br>Powertrain</p>
                        </div>
                    </div>
                    <div class="team-card img3card">
                        <img src={prishamam} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Prisha Chakravorty</h3>
                            <p>Mentor<br></br>Steering, Suspension, Brakes, CAD & Finance</p>
                        </div>
                    </div>
                    <div class="team-card rakshit">
                        <img src={Rakshit_Pandey} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Rakshit Pandey</h3>
                            <p>Captain <br></br>CAD & Chassis</p>
                        </div>
                    </div>
                    <div class="team-card sumit">
                        <img src={Sumit} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Sumit Saxena</h3>
                            <p> Vice Captain <br></br>Arduino & Electronics</p>
                        </div>
                    </div>
                    
                    <div class="team-card piyush">
                        <img src={Piyush} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Piyush Kaushal </h3>
                            <p>Wire Harrness & Electronics </p>
                        </div>
                    </div>
                    <div class="team-card Saharsh">
                        <img src={Saharsh} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Saharsh Upadhyay </h3>
                            <p>Wire Harness & Electronics Innovations</p>
                        </div>
                    </div>
                    <div class="team-card arjun">
                        <img src={Arjun} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Arjun kushwaha </h3>
                            <p>CAD & Chassis</p>
                        </div>
                    </div>
                    <div class="team-card anurag">
                        <img src={Anurag} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Anurag Tiwari </h3>
                            <p>Wire Harrness & Electronics </p>
                        </div>
                    </div>
                    <div class="team-card yash">
                        <img src={Yash} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Yash Malotiya </h3>
                            <p>Suspension & Brakes </p>
                        </div>
                    </div>
                    <div class="team-card aman">
                        <img src={Aman} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Aman kushwaha </h3>
                            <p>Suspension & Brakes </p>
                        </div>
                    </div>
                    <div class="team-card nidhi">
                        <img src={Nidhi} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Nidhi Patel </h3>
                            <p>Powertrain</p>
                        </div>
                    </div>
                    <div class="team-card vikash">
                        <img src={Vikash} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Vikash soni </h3>
                            <p>Suspension & Brakes , CAD & Chassis</p>
                        </div>
                    </div>
                    <div class="team-card aayush">
                        <img src={Ayush} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Ayush Somkuwar</h3>
                            <p>CAD & Chassis</p>
                        </div>
                    </div>
                    <div class="team-card nikhil">
                        <img src={Nikhil} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Nikhil Khorwal </h3>
                            <p>Suspension & Brakes </p>
                        </div>
                    </div>
                    <div class="team-card nayan">
                        <img src={Nayan} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Nayan Rathore  </h3>
                            <p>Suspension & Brakes </p>
                        </div>
                    </div>
                    <div class="team-card saksham">
                        <img src={Saksham} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Saksham Shrivastava</h3>
                            <p>Wire Harrness & Electronics </p>
                        </div>
                    </div>
                    <div class="team-card kavyansh">
                        <img src={kavyansh} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Kavyansh saxena</h3>
                            <p>Wire Harrness & Electronics </p>
                        </div>
                    </div>
                    <div class="team-card rahul">
                        <img src={Rahul} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Rahul Patil</h3>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    <div class="team-card shabbir">
                        <img src={Shabbir} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Shabbir Mhowwala </h3>
                            <p>Arduino & Electronics</p>
                        </div>
                    </div>
                    <div class="team-card Saubhagya">
                        <img src={Saubhagya} alt="Team Member" class="team-img" />
                        <div class="team-info">
                            <h3>Saubhagya Barve</h3>
                            <p>Electronics</p>
                        </div>
                    </div>
                    
                    
                </div>

            </div>
            < Footer />

        </div>
    )
}
