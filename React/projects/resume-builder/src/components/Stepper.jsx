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
          />
        );
      case 1: // PersonalDescriptionForm
        return (
          <PersonalDescriptionForm 
            formData={formData.personalDescription} 
            onChange={(newData) => handleFormChange('personalDescription', newData)}
          />
        );
      case 2: // WorkExperienceForm
        return (
          <WorkExperienceForm 
            formData={formData.workExperience} 
            onChange={(newData) => handleFormChange('workExperience', newData)}
            onPrevStep={prevStep}
            onNextStep={nextStep} 
          />
        );
      case 3: // EducationForm
        return (
          <EducationForm 
            formData={formData.education} 
            onChange={(newData) => handleFormChange('education', newData)}
          />
        );
      case 4: // SkillsForm
        return (
          <SkillsForm 
            formData={formData.skills} 
            onChange={(newData) => handleFormChange('skills', newData)}
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
        <button className="defaultButton" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Stepper;
