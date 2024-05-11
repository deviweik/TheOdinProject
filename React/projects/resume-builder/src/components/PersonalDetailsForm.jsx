import React, { useState } from 'react';

import '../styles/styles.css'; 

const PersonalDetailsForm = ({ formData, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <div className='formContainer'>
      <h2 className='formTitle'>Hello, please enter your personal details to get started.</h2>
      <input 
        className="defaultTextInput"
        type="text"
        name="name"
        value={formData.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name="address"
        value={formData.address}
        placeholder="Address"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name="email"
        value={formData.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        placeholder="Phone Number"
        onChange={handleChange}
      />
    </div>
  );
}

export default PersonalDetailsForm;