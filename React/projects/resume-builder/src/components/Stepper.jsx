import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import PersonalDescriptionForm from './PersonalDescriptionForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';

import '../styles/styles.css'; 

const Stepper = () => {
  const [step, setStep] = useState(0); // Current step

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <PersonalDetailsForm />;
      case 1:
        return <PersonalDescriptionForm />;
      case 2:
        return <WorkExperienceForm onNextStep={nextStep}/>;
      case 3:
        return <EducationForm />;
      case 4:
        return <SkillsForm />;
      default:
        return null;
    }
  };

  return (
    <div className='formMain'>
      {renderStep()}
      <div>
        {step > 0 && <button className="defaultButton" onClick={prevStep}>Prev</button>}
        <button className="defaultButton" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Stepper;
