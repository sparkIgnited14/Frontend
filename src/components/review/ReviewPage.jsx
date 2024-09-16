// pages/ReviewPage.js
import { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import Nav from '../../nav';
import Footer from '../../footer';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]); // Add the new review to the list
  };

  return (
    <div>
      <Nav />
      <h1>Submit a Review</h1>
      <ReviewForm onSubmit={addReview} />
      <ReviewList reviews={reviews} />
      <Footer />
    </div>
  );
};

export default ReviewPage;
