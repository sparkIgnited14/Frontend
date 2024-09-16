// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubmitQuery from './query/queryForm';
import Nav from '../nav';
import Footer from '../footer';

import './feedback.css';

const Feedback = () => {
    // const [activeIndex, setActiveIndex] = useState(null);

    // const toggleAnswer = (index) => {
    //   if (activeIndex === index) {
    //     setActiveIndex(null); // Collapse if already active
    //   } else {
    //     setActiveIndex(index); // Show answer
    //   }
    // };
  
    // const faqs = [
    //   {
    //     question: 'What is the range of your electric bikes?',
    //     answer: 'Our electric bikes offer a range of up to 100km on a single charge, depending on the model and road conditions.',
    //   },
    //   {
    //     question: 'How long does it take to charge the battery?',
    //     answer: 'It typically takes 4-5 hours for a full charge using our standard chargers.',
    //   },
    //   {
    //     question: 'What warranty do you offer on your vehicles?',
    //     answer: 'We offer a 2-year warranty on our bikes and scooters, including the battery and motor.',
    //   },
    // ];
    const [faqs, setFaqs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    // Fetch FAQs from backend
    useEffect(() => {
      const fetchFaqs = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/faqs');
          setFaqs(response.data); // Set fetched data to state
        } catch (error) {
          console.error('Error fetching FAQs:', error);
        }
      };

      fetchFaqs();
    }, []);
    const toggleAnswer = (index) => {
      if (activeIndex === index) {
        setActiveIndex(null); // Collapse if already active
      } else {
        setActiveIndex(index); // Show answer
      }
    };


  return (
    <>
    < Nav />
    <section>
    <div className="query-section">
          < SubmitQuery />
      </div>
      </section>
      <section>
      {/* <!-- FAQ --> */}
    <div class="section" id="faq">
        <h2 class="secondary">Frequently Asked Questions</h2>

        <div class="faq">
          
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                      <details>
                    <summary onClick={() => toggleAnswer(index)} className={` ${activeIndex === index ? 'active' : ''}`}>
                      {faq.question}
                    </summary>
                    <div class="content">
                    <p>
                    <p className="">{faq.answer}</p>
                    </p>
                   </div>
                   </details>
                  </div>
                ))}
              </div>
            
{/* 
            <details>
                <summary>Can we get cash on delivery (COD) ? </summary>
                <div class="content">
                    <p>
                        Yes, you can..
                    </p>
                </div>
            </details>

            <details>
                <summary>Are there any delivery charges?</summary>
                <div class="content">
                    <p>
                        No, its free of cost.
                    </p>
                </div>
            </details>

            <details>
                <summary>What is the estimated delivery time?</summary>
                <div class="content">
                    <p>
                        The estimated delivery time will be provided during checkout based on your location and current order volume.
                    </p>
                </div>
            </details> */}
        </div>
    </div>
    {/* <!-- End FAQ --> */}

      </section>
      <Footer />
      </>
  );
};

export default Feedback;
