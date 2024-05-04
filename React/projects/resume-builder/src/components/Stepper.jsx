import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import PersonalDescriptionForm from './PersonalDescriptionForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';

import '../styles/styles.css'; 

const Stepper = () => {
  const [step, setStep] = useState(0); // Current step
  const [formData, setFormData] = useState({
    personalDetails: {
      name: '',
      address: '',
      email: '',
      phoneNumber: '',
    },
    personalDescription: {
      personalDescription: ''
    },
    workExperience: [],
    education: {
      schoolName: '',
      location: '',
      degree: '',
      major: '',
      details: '',
      isPursuing: '',
      gradDate: '',
      expGradDate: ''
    },
    skills: [
      {
        id: 0,
        value: ''
      }
    ],
  });
  
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleFormChange = (formKey, newData) => {
    setFormData({
      ...formData,
      [formKey]: newData,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <PersonalDetailsForm 
            formData={formData.personalDetails} 
            onChange={(newData) => handleFormChange('personalDetails', newData)}
            onNextStep={nextStep} 
          />
        );
      case 1:
        return (
          <PersonalDescriptionForm 
            formData={formData.personalDescription} 
            onChange={(newData) => handleFormChange('personalDescription', newData)}
            onNextStep={nextStep} 
          />
        );
      case 2:
        return (
          <WorkExperienceForm 
            formData={formData.workExperience} 
            onChange={(newData) => handleFormChange('workExperience', newData)}
            onNextStep={nextStep} 
          />
        );
      case 3:
        return (
          <EducationForm 
            formData={formData.education} 
            onChange={(newData) => handleFormChange('education', newData)}
            onNextStep={nextStep} 
          />
        );
      case 4:
        return (
          <SkillsForm 
            formData={formData.skills} 
            onChange={(newData) => handleFormChange('skills', newData)}
            onNextStep={nextStep} 
          />
        );
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
