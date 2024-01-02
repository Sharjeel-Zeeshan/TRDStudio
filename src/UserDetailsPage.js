import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserDetails from './UserDetails';

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))

  }, [id]);

  return user ? <UserDetails user={user} /> : null;
};

export default UserDetailsPage;
