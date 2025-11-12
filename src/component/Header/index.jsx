import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 


const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Signup Profile</h1>
      <div className="nav-links">
        <Link to="/" className="nav-item">Signup</Link>
        <Link to="/profile" className="nav-item">Profile</Link>
      </div>
    </nav>
  );
};

export default Header;
