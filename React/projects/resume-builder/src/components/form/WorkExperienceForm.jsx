import React, { useState } from 'react';
import WorkExperienceFormGeneral from './WorkExperienceFormGeneral';
import WorkExperienceFormDetails from './WorkExperienceFormDetails';
import WorkExperienceFormRecap from './WorkExperienceFormRecap';

import '../../styles/styles.css'; 

const WorkExperienceForm = ({ formData, onChange, onPrevStep, onNextStep, validation, setValidation }) => {
  const roles = formData.roles;
  const currentRoleIndex = formData.currentRoleIndex;
  const [step, setStep] = useState(0); // Current step

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedRoles = roles.map(role => 
      role.id === currentRoleIndex ? { ...role, [name]: value } : role
    );

    // Clear endDate if currentlyEmployed is true
    if (name === 'currentlyEmployed' && value === true) {
      updatedRoles = updatedRoles.map(role => 
        role.id === currentRoleIndex ? { ...role, endDate: '' } : role
      );
    }

    const updatedFormData = {...formData, roles: updatedRoles};

    onChange(updatedFormData);
  };

  const prevRole = () => {
    let updatedFormData = {
      ...formData,
      currentRoleIndex: currentRoleIndex - 1
    }
    console.log('prevRole: ', updatedFormData);
    onChange(updatedFormData);
  };

  const nextRole = () => {
    let updatedFormData = {
      ...formData,
      currentRoleIndex: currentRoleIndex + 1
    }
    console.log('nextRole: ', updatedFormData);
    onChange(updatedFormData);
  };

  const initializeNewRole = () => {
    const newId = roles.length;
    const updatedRoles = [
      ...roles, 
      {
        id: newId,
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
    ];
    const updatedFormData = {
      currentRoleIndex: newId,
      roles: updatedRoles
    };
    onChange(updatedFormData);
  };

  const nextStep = () => {
    if (step === 0) {
      setStep(1);
      setValidation(false);
    } else if (step === 1 && roles[currentRoleIndex].isLastRole == true) {
      setStep(2);
      setValidation(false);
    } else if (step === 1 && roles[currentRoleIndex].isLastRole == false) {
      setStep(0);
      if (currentRoleIndex === roles.length - 1) {
        initializeNewRole();
      } else {
        nextRole();
      }
      setValidation(false);
    } else if (step === 2) {
      onNextStep();
    }
  };

  const prevStep = () => {
    console.log('step: ', step, 'currentRoleIndex: ', currentRoleIndex);
    if (step === 0 && currentRoleIndex === 0) {
      onPrevStep();
    } else if (step === 0 && currentRoleIndex !== 0) {
      setStep(1)
      prevRole();
    } else {
      setStep(step - 1)
    } 
  };

  const renderStep = () => {
    console.log('rendering WorkExperienceForm step: ', step);
    switch (step) {
      case 0: // WorkExperienceFormGeneral
        return (
          <WorkExperienceFormGeneral 
            formData={roles[currentRoleIndex]}
            onChange={handleChange}
            setValidation={setValidation}
          />
        );
        
      case 1: // WorkExperienceFormDetails
        return (
          <WorkExperienceFormDetails 
            formData={roles[currentRoleIndex]}
            onChange={handleChange}
            setValidation={setValidation}
          />
        );
      case 2: // WorkExperienceFormRecap
        return (
          <WorkExperienceFormRecap 
            formData={formData}
            onChange={handleChange}
            setValidation={setValidation}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
      <div>
        <button className="defaultButton" onClick={prevStep}>Prev</button>
        <button className={validation ? 'defaultButton' : 'defaultButton validationUnmet'} onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
