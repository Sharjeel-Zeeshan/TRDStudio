
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./UserDetailpage.css"

const UserDetailsPage = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
  
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
     
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          
          <Link to="/" className="back">Back to User List</Link>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetailsPage;
