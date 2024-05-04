import React, { useState } from 'react';

import '../styles/styles.css'; 

const PersonalDescriptionForm = ({ formData, onChange, onNextStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <div className='formContainer'>
      <h2>Now please enter a personal description, outlining your experience in general terms and explaining what you can bring to the table for potential employers.</h2>
      <textarea
        className="defaultTextInput"
        value={formData.personalDescription}
        name="personalDescription"
        placeholder="Start typing here. Remember to be confident and straight to the point!"
        style={{width: '90%'}}
        onChange={handleChange}
      />
    </div>
  );
}

export default PersonalDescriptionForm;

