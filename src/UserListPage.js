import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
   
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((data) => setUser(data))
     
  }, [id]);

  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address : {user.address}</p>
         
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
      <Link to="/">Back to User List</Link>
    </div>
  );
};

export default UserDetailsPage;
