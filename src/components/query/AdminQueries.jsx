import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewList from '../review/ReviewList';

const AdminQueries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get('https://backend-server-c2vh.onrender.com/api/admin/queries');
        setQueries(response.data);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };

    fetchQueries();
  }, []);

  const handleMarkDone = async (id) => {
    try {
      const response = await axios.put(`https://backend-server-c2vh.onrender.com/api/admin/queries/${id}`);
      setQueries(queries.map(query => (query._id === id ? { ...query, status: 'done' } : query)));
    } catch (error) {
      console.error('Error marking query as done:', error);
    }
  };

  return (
    <div>
      <h2>Admin Query Management</h2>
      <ul>
        {queries.map((query) => (
          <li key={query._id}>
            <p>
              <strong>{query.name}</strong> ({query.email}) - {query.query}
            </p>
            <p>Status: {query.status}</p>
            {query.status === 'pending' && (
              <button onClick={() => handleMarkDone(query._id)}>Mark Done</button>
            )}
          </li>
        ))}
      </ul>
      
    < ReviewList />
    </div>
  );
};

export default AdminQueries;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminQueries = () => {
//   const [queries, setQueries] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQueries = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/admin/queries', { withCredentials: true });
//         setQueries(response.data);
//       } catch (error) {
//         // Ensure error.response exists before accessing status
//         if (error.response && error.response.status === 401) {
//           navigate('/adminLogin');
//         } else {
//           console.error('Error fetching queries:', error);
//         }
//       }
//     };

//     fetchQueries();
//   }, [navigate]);

//   const handleMarkDone = async (id) => {
//     try {
//       await axios.put(`http://localhost:3000/api/admin/queries/${id}`, {}, { withCredentials: true });
//       setQueries((prevQueries) => prevQueries.map(query => 
//         query._id === id ? { ...query, status: 'done' } : query
//       ));
//     } catch (error) {
//       console.error('Error marking query as done:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Query Management</h2>
//       <ul>
//         {queries.map((query) => (
//           <li key={query._id}>
//             <p>
//               <strong>{query.name}</strong> ({query.email}) - {query.query}
//             </p>
//             <p>Status: {query.status}</p>
//             {query.status === 'pending' && (
//               <button onClick={() => handleMarkDone(query._id)}>Mark Done</button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminQueries;
