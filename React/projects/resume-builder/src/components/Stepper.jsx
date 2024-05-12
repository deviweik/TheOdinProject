import React, { useState } from 'react';
import PersonalDetailsForm from './form/PersonalDetailsForm';
import PersonalDescriptionForm from './form/PersonalDescriptionForm';
import WorkExperienceForm from './form/WorkExperienceForm';
import EducationForm from './form/EducationForm';
import SkillsForm from './form/SkillsForm';

import '../styles/styles.css'; 

const Stepper = () => {
  const [step, setStep] = useState(0); // Current step
  const [validationMet, setValidationMet] = useState(false);
  const [formData, setFormData] = useState({
    personalDetails: {
      name: '',
      address: '',
      email: '',
      phoneNumber: '',
    },
    personalDescription: '',
    workExperience: {
      currentRoleIndex: 0,
      roles: [
        {
          id: 0,
          jobTitle: '',
          companyName: '',
          location: '',
          currentlyEmployed: false,
          startDate: '',
          endDate: '',
          isLastRole: false,
          bullets: [
            {
              id: 0,
              value: ''
            }
          ]
        }
      ]
    },
    education: {
      schoolName: '',
      location: '',
      degree: '',
      major: '',
      details: '',
      isPursuing: false,
      gradDate: ''
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
    setValidationMet(false);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleFormChange = (formKey, newData) => {
    // console.log('New Data:', newData);
    setFormData({
      ...formData,
      [formKey]: newData,
    });
    // console.log('Updated FormData:', formData);
  };

  const renderStep = () => {
    console.log('Rendering Step:', step);
    console.log('Current FormData:', formData);
    switch (step) {
      case 0: // PersonalDetailsForm
        return (
          <PersonalDetailsForm 
            formData={formData.personalDetails} 
            onChange={(newData) => handleFormChange('personalDetails', newData)}
            setValidation={setValidationMet}
          />
        );
      case 1: // PersonalDescriptionForm
        return (
          <PersonalDescriptionForm 
            formData={formData.personalDescription} 
            onChange={(newData) => handleFormChange('personalDescription', newData)}
            setValidation={setValidationMet}
          />
        );
      case 2: // WorkExperienceForm
        return (
          <WorkExperienceForm 
            formData={formData.workExperience} 
            onChange={(newData) => handleFormChange('workExperience', newData)}
            onPrevStep={prevStep}
            onNextStep={nextStep} 
            validation={validationMet}
            setValidation={setValidationMet}
          />
        );
      case 3: // EducationForm
        return (
          <EducationForm 
            formData={formData.education} 
            onChange={(newData) => handleFormChange('education', newData)}
            setValidation={setValidationMet}
          />
        );
      case 4: // SkillsForm
        return (
          <SkillsForm 
            formData={formData.skills} 
            onChange={(newData) => handleFormChange('skills', newData)}
            setValidation={setValidationMet}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='formMain'>
      {renderStep()}
      <div className={step === 2 ? 'navButtonContainer hidden' : 'navButtonContainer'}>
        {step > 0 && <button className="defaultButton" onClick={prevStep}>Prev</button>}
        <button className={validationMet ? 'defaultButton' : 'defaultButton validationUnmet'} onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Stepper;
