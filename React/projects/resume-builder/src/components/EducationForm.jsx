import React, { useState } from 'react';
import YesOrNo from './YesOrNo';

import '../styles/styles.css'; 

const EducationForm = ({ onNextStep }) => {
  const [isPursuing, setIsPursuing] = useState(true);

  return (
    <div className='formContainer'>
      <h2 className='defaultFormTitle'>Time for your education.</h2>
      <input 
        className="defaultTextInput"
        type="text"
        value=""
        placeholder="School Name"
      />
      <input 
        className="defaultTextInput"
        type="text"
        value=""
        placeholder="Location (City, State)"
      />
      <input 
        className="defaultTextInput"
        type="text"
        value=""
        placeholder="Degree (Masters, Bachelors, Associate, etc.)"
      />
      <input 
        className="defaultTextInput"
        type="text"
        value=""
        placeholder="Major"
      />
      <input 
        className="defaultTextInput"
        type="text"
        value=""
        placeholder="Details (Honors, GPA, etc.)"
      />
      <YesOrNo
        question="Are you currently pursuing this degree?"
        state={isPursuing}
        setState={setIsPursuing}
      />
    </div>
  );
}

export default EducationForm;

