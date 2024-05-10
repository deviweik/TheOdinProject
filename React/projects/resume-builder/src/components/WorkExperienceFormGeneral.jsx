import React, { useState } from 'react';
import YesOrNo from './YesOrNo';

import '../styles/styles.css'; 



const WorkExperienceFormGeneral = ({ formData, onChange }) => {
  const setCurrentlyEmployed = (newValue) => {
    console.log(newValue);
    const event = {
      target: {
        value: newValue,
        name: 'currentlyEmployed'
      }
    };
    onChange(event);
  }

  return (
    <div className='formContainer'>
      <h2 className='formTitle'>{formData.id === 0 ? 'Time for your work experience.' : 'Please enter your next position.'}</h2>
      <input 
        className="defaultTextInput"
        type="text"
        name='jobTitle'
        value={formData.jobTitle}
        placeholder="Job Title"
        onChange={onChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='companyName'
        value={formData.companyName}
        placeholder="Company Name"
        onChange={onChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='location'
        value={formData.location}
        placeholder="Location (eg. New York City, NY)"
        onChange={onChange}
      />
      <YesOrNo
        question="Are you currently employed in this role?"
        state={formData.currentlyEmployed}
        setState={setCurrentlyEmployed}
      />
      <div className='dateInputContainer'>
        <h5 className='dateInputTitle'>Start Date:</h5>
        <input 
          className="defaultDateInput"
          type="date"
          name='startDate'
          value={formData.startDate}
          placeholder="Start Date"
          onChange={onChange}
        />
      </div>
      <div className={formData.currentlyEmployed === true ? 'dateInputContainer hidden' : 'dateInputContainer'} >
        <h5 className='dateInputTitle'>End Date:</h5>
        <input 
          className="defaultDateInput"
          type="date"
          name='endDate'
          value={formData.endDate}
          placeholder="End Date"
          onChange={onChange}
        />
      </div>
      
    </div>
  );
}

export default WorkExperienceFormGeneral;