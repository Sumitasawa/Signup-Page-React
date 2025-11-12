import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { useSelector } from 'react-redux';

const App = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  
  return (
    <Routes>
      <Route
        path="/"
        element={!accessToken ? <Signup /> : <Navigate to="/profile" />}
      />
      <Route
        path="/profile"
        element={accessToken ? <Profile /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
