
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./UserListPage"

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      
  }, []);

  return (
    <div className='container'>
      <h1>User List</h1>
      <ol >
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserListPage;
