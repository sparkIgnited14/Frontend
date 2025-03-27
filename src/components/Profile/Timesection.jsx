import React, { useEffect } from 'react';
import './TimeSection.css'; // Ensure you have a CSS file for styling

import TravelSavingsCalculator from './TravelSavingsCalculator';

const Timeline = () => {
  useEffect(() => {
    // Function to reveal timeline items smoothly on scroll
    const revealTimelineItems = () => {
      const items = document.querySelectorAll('.timeline-item');
      items.forEach((item) => {
        const position = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          item.classList.add('visible');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', revealTimelineItems);

    // Call function on load to reveal any items already in view
    revealTimelineItems();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', revealTimelineItems);
    };
  }, []);

  useEffect(() => {
    // Modal functionality
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeButton = document.querySelector('.close');
    const images = document.querySelectorAll('.enlarge-on-hover');

    const openModal = (event) => {
      modal.style.display = 'flex';
      modalImg.src = event.target.src;
    };

    const closeModal = () => {
      modal.style.display = 'none';
    };

    images.forEach((image) => {
      image.addEventListener('click', openModal);
    });

    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    // Cleanup event listeners on component unmount
    return () => {
      images.forEach((image) => {
        image.removeEventListener('click', openModal);
      });
      closeButton.removeEventListener('click', closeModal);
      window.removeEventListener('click', closeModal);
    };
  }, []);

  return (
    <div className='timesecbody'>
      <center>Bike servicing timiline</center>
      <div className="timeline-container">
        {/* Timeline Items */}
        <div className="timeline-item left">
          <div className="timeline-date">30 Sep 2024</div>
          <div className="timeline-content">
            {/* <img
              src="https://png.pngtree.com/png-clipart/20220921/ourmid/pngtree-fire-logo-png-image_6209600.png"
              alt="Avatar 1"
              className="timeline-avatar"
            /> */}
            <div>
              <h2 className="timeline-title">Bike Purchase</h2>
              <p className="timeline-description">
                {/* <img
                  src="https://madhous3.ru/dmpng/Screenshot_3.png"
                  width="340"
                  height="260"
                  className="enlarge-on-hover"
                  alt="Info"
                /> */}
                <br />
                The bike is bought and begins its journey.
               </p>
            </div>
          </div>
        </div>

        {/* Add the rest of the timeline items in a similar structure */}
        {/* Example */}
        <div className="timeline-item right">
          <div className="timeline-date">10 Oct 2024</div>
          <div className="timeline-content">
            {/* <img
              src="https://madhous3.ru/png/dd23421412-vd32.png"
              alt="Avatar 2"
              className="timeline-avatar"
            /> */}
            <div>
              <h2 className="timeline-title">First Servicing</h2>
              <p className="timeline-description">
                {/* <img
                  src="https://madhous3.ru/dmpng/Screenshot_4.png"
                  width="340"
                  height="260"
                  className="enlarge-on-hover"
                  alt="Chat"
                /> */}
                <br />
                Completed after 500 km of usage. General inspection and maintenance.
                </p>
            </div>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="timeline-item left">
          <div className="timeline-date">2 Nov 2024</div>
          <div className="timeline-content">
            {/* <img
              src="https://madhous3.ru/png/dd1818f4-b65e-4c13-ac86-03ccb8fcd00c.png"
              alt="Avatar 1"
              className="timeline-avatar"
            /> */}
            <div>
              <h2 className="timeline-title">Post-Purchase Review</h2>
              <p className="timeline-description">
                {/* <img
                  src="https://madhous3.ru/dmpng/Screenshot_3.png"
                  width="340"
                  height="260"
                  className="enlarge-on-hover"
                  alt="Info"
                /> */}
                <br />
                A check-up to ensure the bike is functioning optimally after initial usage.
               </p>
            </div>
          </div>
        </div>

        
        {/* Example */}
        <div className="timeline-item right">
          <div className="timeline-date">10 Dec  2024</div>
          <div className="timeline-content">
            {/* <img
              src="https://madhous3.ru/png/dd23421412-vd32.png"
              alt="Avatar 2"
              className="timeline-avatar"
            /> */}
            <div>
              <h2 className="timeline-title">Second Servicing</h2>
              <p className="timeline-description">
                {/* <img
                  src="https://madhous3.ru/dmpng/Screenshot_4.png"
                  width="340"
                  height="260"
                  className="enlarge-on-hover"
                  alt="Chat"
                /> */}
                <br />
                Another maintenance session after continued use (likely 1,000 km or similar).
                </p>
            </div>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="timeline-item left">
          <div className="timeline-date">12 Jan 2024</div>
          <div className="timeline-content">
            {/* <img
              src="https://madhous3.ru/png/dd1818f4-b65e-4c13-ac86-03ccb8fcd00c.png"
              alt="Avatar 1"
              className="timeline-avatar"
            /> */}
            <div>
              <h2 className="timeline-title">Quarterly Inspection</h2>
              <p className="timeline-description">
                {/* <img
                  src="https://madhous3.ru/dmpng/Screenshot_3.png"
                  width="340"
                  height="260"
                  className="enlarge-on-hover"
                  alt="Info"
                /> */}
                <br />
                Routine check-up to maintain performance.
               </p>
            </div>
          </div>
        </div>
        
        {/* Example */}
        <div className="timeline-item right">
          <div className="timeline-date">1 Feb 2024</div>
          <div className="timeline-content">
            {/* <img
              src="https://madhous3.ru/png/dd23421412-vd32.png"
              alt="Avatar 2"
              className="timeline-avatar"
            /> */}
            <div>
              <h2 className="timeline-title">Extended Servicing</h2>
              <p className="timeline-description">
                {/* <img
                  src="https://madhous3.ru/dmpng/Screenshot_4.png"
                  width="340"
                  height="260"
                  className="enlarge-on-hover"
                  alt="Chat"
                /> */}
                <br />
                Comprehensive service after significant use.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div id="modal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="modal-img" alt="Modal" />
      </div>
      <div>
      <TravelSavingsCalculator />
      </div>
    </div>
  );
};

export default Timeline;
