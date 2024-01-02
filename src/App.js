
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserListPage from './UserListPage';
import UserDetailsPage from './UserDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserListPage />} />
      <Route path="/user/:id" element={<UserDetailsPage />} />
    </Routes>
  );
}

export default App;
