import React, { useState } from 'react';
import './contact.css';
import Nav from '../nav';
import Footer from '../footer';

const Contact = () => {

  return (
    <div>
      <Nav />
      <section className="contact-section" id="contact">


        {/* Contact Section */}
        <div className="contact-info">
          <div>
            <h2>Contact Us</h2>
            <p><strong>Address:</strong> <a href="https://www.google.com/maps/place/M+Block,+IET+DAVV/@22.6809314,75.8798211,146m/data=!3m1!1e3!4m6!3m5!1s0x3962fcc0f9cf4f17:0x4cd25d89c4f3e0ce!8m2!3d22.6808615!4d75.8798583!16s%2Fg%2F11c613djh5?authuser=0&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Team Spark Workshop<br></br>
                                Backstage M block , Near MSME<br></br>
                                Institute of Engineering and <br></br>Technology ,DAVV
                                Indore<br></br> Madhya Pradesh
                                452017</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919399324469">+91 93993 24469</a></p>
            <p><strong>Email:</strong> <a href="mailto:sparkignited14@gmail.com">sparkignited14@gmail.com</a></p>
            <p><strong>Follow us:</strong></p>
            <div className="social-media-links">
              <div className="social-icons">
                <a href="https://www.instagram.com/team_sparkignited/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.instagram.com/team_sparkignited/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/company/team-spark-ignited/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div>
            <img src='../Screenshot 2024-09-14 155559.png' alt='img'></img>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
