import React from 'react';
import './Input.css';
const Input = ({ placeholder, type = 'text', value, onChange, name }) => {
  return (
    <div className="input-container">
      <input
        className="input-field"
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
