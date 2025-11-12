import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken && storedUser) {
      setUser(storedUser);
    } else {
      setUser({ name: '', email: '', password: '' });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    setUser({ name: '', email: '', password: '' });
    
     window.location.href = '/';
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="heading">Profile</h1>

        <div className="profile-card">
          <p><strong>Full Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Password:</strong> {user.password}</p>
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
