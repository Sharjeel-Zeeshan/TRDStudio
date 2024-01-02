import React from 'react';
import { Router, Route } from 'react-router-dom';
import UserListPage from './UserListPage';
import UserDetailsPage from './UserDetailsPage';

function App() {
  return (
    <Router>
      <Route path="/" exact component={UserListPage} />
      <Route path="/user/:id" component={UserDetailsPage} />
    </Router>
  );
}

export default App;
