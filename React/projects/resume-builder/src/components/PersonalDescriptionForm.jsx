import React, { useState } from 'react';

import '../styles/styles.css'; 

const PersonalDescriptionForm = ({ onNextStep }) => {
  return (
    <div className='formContainer'>
      <h2>Now please enter a personal description, outlining your experience in general terms and explaining what you can bring to the table for potential employers.</h2>
      <textarea
        className="defaultTextInput"
        value=""
        placeholder="Start typing here. Remember to be confident and straight to the point!"
        style={{width: '90%'}}
      />
    </div>
  );
}

export default PersonalDescriptionForm;

