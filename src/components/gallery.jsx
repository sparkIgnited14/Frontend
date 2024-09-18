import React from 'react';
import Nav from '../nav';
import Footer from '../footer';
import './gallery.css';

// Import images and videos
import image1 from '../assets/gallery/20240218_172057.jpg';
import image2 from '../assets/gallery/20240218_171841.jpg';
import image3 from '../assets/gallery/20240218_172424.jpg';
import image4 from '../assets/gallery/20240217_113817.jpg';
import image5 from '../assets/gallery/trophhy.jpg';
import image6 from '../assets/gallery/IMG_20240218_141351616_HDR_AE.jpg';
import image7 from '../assets/gallery/gal1.jpg';
import image8 from '../assets/gallery/gal2.jpg';
import image9 from '../assets/gallery/gal3.jpg';
import video1 from '../assets/gallery/video12.mp4'; // For video

// Import Lightbox2 CSS
import 'lightbox2/dist/css/lightbox.min.css';
// Import Lightbox2 JavaScript
import 'lightbox2/dist/js/lightbox-plus-jquery.min.js';

export default function Gallery() {
    return (
        <div>
            <Nav />
            <div className='container-lg'>
                <h1>Spark Ignited Moments</h1>
                <p>Explore memorable moments from our event, where aspiring industry experts and innovators come together to inspire and learn.</p>
                <div className="gallery">
                    {/* Image 1 */}
                    <div className="gallery-item">
                        <a href={image1} data-lightbox="gallery" data-title="Image 1">
                            <img src={image1} alt="Image 1" className="gallery-media" />
                        </a>
                    </div>
                    {/* Image 2 */}
                    <div className="gallery-item">
                        <a href={image2} data-lightbox="gallery" data-title="Image 2">
                            <img src={image2} alt="Image 2" className="gallery-media" />
                        </a>
                    </div>
                    {/* Image 3 */}
                    <div className="gallery-item">
                        <a href={image3} data-lightbox="gallery" data-title="Image 3">
                            <img src={image3} alt="Image 3" className="gallery-media" />
                        </a>
                    </div>
                    <div className="gallery-item">
                        <a href={image4} data-lightbox="gallery" data-title="Image 3">
                            <img src={image4}  alt="Image 3" className="gallery-media" />
                        </a>
                    </div>
                    <div className="gallery-item">
                        <a href={image5} data-lightbox="gallery" data-title="Image 3">
                            <img src={image5} alt="Image 3" className="gallery-media" />
                        </a>
                    </div>
                    <div className="gallery-item">
                        <a href={image6} data-lightbox="gallery" data-title="Image 3">
                            <img src={image6} alt="Image 3" className="gallery-media" />
                        </a>
                    </div>
                    <div className="gallery-item">
                        <a href={image7} data-lightbox="gallery" data-title="Image 3">
                            <img src={image7} alt="Image 3" className="gallery-media" />
                        </a>
                    </div>
                    <div className="gallery-item">
                        <a href={image8} data-lightbox="gallery" data-title="Image 3">
                            <img src={image8} alt="Image 3" className="gallery-media" />
                        </a>
                    </div>
                    <div className="gallery-item">
                        <a href={image9} data-lightbox="gallery" data-title="Image 3">
                            <img src={image9} alt="Image 3" className="gallery-media" />
                        </a>
                    </div>
                    
                    {/* Video */}
                    <div className="gallery-item">
                        <a href={video1}  data-title="Video">
                            <video controls className="gallery-media">
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
