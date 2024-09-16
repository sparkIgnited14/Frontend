// components/ReviewList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ReviewList.css' ;


const ReviewListSmall = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get('https://backend-server-c2vh.onrender.com/reviewpage');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };

    fetchReview();
  }, []);

  // const handleMarkDone = async (id) => {
  //   try {
  //     const response = await axios.put(`http://localhost:3000/api/admin/queries/${id}`);
  //     setReviews(reviews.map(review => (review._id === id ? { ...review, status: 'done' } : review)));
  //   } catch (error) {
  //     console.error('Error marking review as done:', error);
  //   }
  // };
    return (
      <div>
        <h2>Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <div className="review-carousel">
            <div  className="carousel-track">
            {reviews.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="card-body">
                <p className="card-text comment">{review.comment} </p>
                <p className="card-text rating"><strong>Rating:</strong> {review.rating} ★</p>
                <p className="card-text name"><strong>Name:</strong> {review.name} </p>
                <p className="card-text source"><strong>Source:</strong> {review.source} </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  
  
  export default ReviewListSmall;
  

  