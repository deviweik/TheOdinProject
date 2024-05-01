import React, { useState } from 'react';

import '../styles/styles.css'; 

const PersonalDetailsForm = ({ onNextStep }) => {
  return (
    <div className='formContainer'>
      <h2 className='formTitle'>Hello, please enter your personal details to get started.</h2>
      <input 
        className="defaultTextInput"
        type="text"
        value=""
        placeholder="Name"
      />
      <input 
        className="defaultTextInput"
        type="text"
        value=""
        placeholder="Address"
      />
      <input 
        className="defaultTextInput"
        type="text"
        value=""
        placeholder="Email"
      />
      <input 
        className="defaultTextInput"
        type="text"
        value=""
        placeholder="Phone Number"
      />
    </div>
  );
}

export default PersonalDetailsForm;