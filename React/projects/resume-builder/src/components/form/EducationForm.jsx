import React, { useEffect } from 'react';
import YesOrNo from '../helpers/YesOrNo';

import '../../styles/styles.css'; 

const EducationForm = ({ formData, onChange, setValidation }) => {
  const { schoolName, location, degree, major, details, isPursuing, gradDate } = formData;

  const setIsPursuing = (newValue) => {
    onChange({ ...formData, 'isPursuing': newValue });
  };

  useEffect(() => {
    if (schoolName && location && degree && major && details && gradDate) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [formData, setValidation]);

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
        value={schoolName}
        placeholder="School Name"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='location'
        value={location}
        placeholder="Location (eg. New York City, NY)"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='degree'
        value={degree}
        placeholder="Degree (Masters, Bachelors, Associate, etc.)"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='major'
        value={major}
        placeholder="Major"
        onChange={handleChange}
      />
      <input 
        className="defaultTextInput"
        type="text"
        name='details'
        value={details}
        placeholder="Details (Honors, GPA, etc.)"
        onChange={handleChange}
      />
      <YesOrNo
        question="Are you currently pursuing this degree?"
        isInverted={false}
        state={isPursuing}
        setState={setIsPursuing}
      />
      <div className='dateInputContainer' >
        <h5 className='dateInputTitle'>{!formData.isPursuing ? 'Grad Date:' : 'Expected Grad Date:'}</h5>
        <input 
          className="defaultDateInput"
          type="date"
          name='gradDate'
          value={gradDate}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default EducationForm;

