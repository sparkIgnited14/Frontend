import React, { useState } from 'react';
import axios from 'axios';
import './query.css';


const SubmitQuery = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://backend-server-c2vh.onrender.com/api/queries', {
        name,
        email,
        query
      });

      alert('Query submitted successfully!');
    } catch (error) {
      console.error('Error submitting query:', error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className='query-section'>
      <div className='query'>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Type your query here..."
        rows="5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Query</button>
      </div>
    </form>
    </div>
  );
};

export default SubmitQuery;




