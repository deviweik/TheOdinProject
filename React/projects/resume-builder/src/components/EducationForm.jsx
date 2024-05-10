import React, { useState } from 'react';
import YesOrNo from './YesOrNo';

import '../styles/styles.css'; 

const EducationForm = ({ formData, onChange, onNextStep }) => {
  // const [isPursuing, setIsPursuing] = useState(true);

  const setIsPursuing = (newValue) => {
    onChange({ ...formData, 'isPursuing': newValue });
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <div className='formContainer'>
      <h2 className='defaultFormTitle'>Time for your education.</h2>
      <input 
        className="defaultTextInput"
        type="text"
        name='schoolName'
        value={formData.schoolName}
        placeholder="School Name"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='location'
        value={formData.location}
        placeholder="Location (eg. New York City, NY)"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='degree'
        value={formData.degree}
        placeholder="Degree (Masters, Bachelors, Associate, etc.)"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='major'
        value={formData.major}
        placeholder="Major"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='details'
        value={formData.details}
        placeholder="Details (Honors, GPA, etc.)"
        onChange={handleChange}
      />
      <YesOrNo
        question="Are you currently pursuing this degree?"
        state={formData.isPursuing}
        setState={setIsPursuing}
      />
    </div>
  );
}

export default EducationForm;

