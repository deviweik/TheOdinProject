import React, { useEffect } from 'react';

import '../../styles/styles.css'; 

const PersonalDetailsForm = ({ formData, onChange, setValidation }) => {
  const { name, address, email, phoneNumber } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (name && address && email && phoneNumber) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [formData, setValidation]);

  return (
    <div className='formContainer'>
      <h2 className='formTitle'>Hello, please enter your personal details to get started.</h2>
      <input 
        className="defaultTextInput"
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name="address"
        value={address}
        placeholder="Address"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name="email"
        value={email}
        placeholder="Email"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        placeholder="Phone Number"
        onChange={handleChange}
      />
    </div>
  );
}

export default PersonalDetailsForm;