import React, { useEffect } from 'react';
import YesOrNo from '../helpers/YesOrNo';

import '../../styles/styles.css'; 

const WorkExperienceFormGeneral = ({ formData, onChange, setValidation }) => {
  const { jobTitle, companyName, location, startDate, currentlyEmployed, endDate } = formData;
  const isEndDateValid = currentlyEmployed || endDate;

  const setCurrentlyEmployed = (newValue) => {
    // console.log(newValue);
    const event = {
      target: {
        value: newValue,
        name: 'currentlyEmployed'
      }
    };
    onChange(event);
  }

  useEffect(() => {
    if (jobTitle && companyName && location && startDate && isEndDateValid) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [formData, setValidation]);

  return (
    <div className='formContainer'>
      <h2 className='formTitle'>{formData.id === 0 ? 'Time for your work experience.' : 'Please enter your next position.'}</h2>
      <input 
        className="defaultTextInput"
        type="text"
        name='jobTitle'
        value={jobTitle}
        placeholder="Job Title"
        onChange={onChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='companyName'
        value={companyName}
        placeholder="Company Name"
        onChange={onChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='location'
        value={location}
        placeholder="Location (eg. New York City, NY)"
        onChange={onChange}
      />
      <YesOrNo
        question="Are you currently employed in this role?"
        state={currentlyEmployed}
        setState={setCurrentlyEmployed}
      />
      <div className='dateInputContainer'>
        <h5 className='dateInputTitle'>Start Date:</h5>
        <input 
          className="defaultDateInput"
          type="date"
          name='startDate'
          value={startDate}
          placeholder="Start Date"
          onChange={onChange}
        />
      </div>
      <div className={currentlyEmployed === true ? 'dateInputContainer hidden' : 'dateInputContainer'} >
        <h5 className='dateInputTitle'>End Date:</h5>
        <input 
          className="defaultDateInput"
          type="date"
          name='endDate'
          value={endDate}
          placeholder="End Date"
          onChange={onChange}
        />
      </div>
      
    </div>
  );
}

export default WorkExperienceFormGeneral;