import React from 'react';
import './App.css';
const Logout = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="logout-container">
      <h2>You have been logged out.</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
