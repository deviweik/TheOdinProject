import React, { useEffect } from 'react';

import '../../styles/styles.css'; 

const PersonalDescriptionForm = ({ formData, onChange, setValidation }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  useEffect(() => {
    if (formData.length > 10) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [formData, setValidation]);

  return (
    <div className='formContainer'>
      <h2 className='formTitle'>Now please enter your personal description.</h2>
      <h4 className='formSubtitle'>Outline your experience in general terms and explain what you can bring to the table for potential employers.</h4>
      <textarea
        className="defaultLongTextInput"
        value={formData}
        name="personalDescription"
        placeholder="Start typing here. Remember to be confident and straight to the point!"
        style={{width: '90%'}}
        onChange={handleChange}
      />
    </div>
  );
}

export default PersonalDescriptionForm;

