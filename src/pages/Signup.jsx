import React, { useState } from 'react';
import Header from '../component/Header';
import '../App.css';
import Input from '../component/Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup} from '../authslice.jsx'

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required!');
      setSuccess('');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      setSuccess('');
      return;
    }

    // Create fake token and user data
    const accessToken = Math.random().toString(36).substring(2);
    const user = {
      name: formData.name,
      email: formData.email,
      password:formData.password,
    };


    dispatch(signup({ user, accessToken }));

    setSuccess('Signup successful!');
    setError('');
    navigate('/profile');
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1 className="heading">Signup</h1>

        <form className="form" onSubmit={handleSignup}>
          <Input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" className="btn">Signup</button>

          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {success && <p style={{ color: 'green', marginTop: '10px' }}>{success}</p>}
        </form>
      </div>
    </>
  );
};

export default Signup;
