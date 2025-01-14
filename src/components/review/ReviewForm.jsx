// components/ReviewForm.js
import { useState } from 'react';
import axios from 'axios';
import './ReviewForm.css' ;


const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://backend-server-c2vh.onrender.com/reviewpage', {
        name,
        rating,
        comment,
        source,
        id: Date.now(), // Unique ID for each review
      });
  
      const newReview = response.data; // Assuming your backend returns the created review
      onSubmit(newReview);
  
      // Clear the form
      setName('');
      setRating(1);
      setComment('');
      setSource('');
      alert('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting query:', error);
    }
  };
  
   

   

  return (
    <div className=' review'>
    <form onSubmit={handleSubmit} className='form'>
        <div class="mb-3">
          <label class="form-label">Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="form-control"
            required
          />
        </div>
      <div class="mb-3">
        <label class="form-label">Review:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label>Rating:</label>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            style={{ color: rating >= star ? 'gold' : 'gray' }}
          >
            ★
          </button>
        ))}
      </div>

      

      <div class="mb-3">
        <label class="form-label">On the basis of </label>
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          class="form-select"
          required
        >
          <option value="">Select</option>
          <option value="Performance">Performance</option>
          <option value="Comfort">Comfort</option>
        </select>
      </div>

      <div class="mb-3">
          <label class="form-label">Would you consider purchasing this vehicle for ₹60,000 if it were launched in the market?</label>
          <select
          class="form-select"
        >
          <option value="">Yes</option>
          <option value="Performance">No </option>
          <option value="Comfort">Might Think</option>
        </select>
        </div>


      <button type="submit" className='btn btn-outline-primary'>Submit Review</button>
    </form>
    </div>
  );
};

export default ReviewForm;








