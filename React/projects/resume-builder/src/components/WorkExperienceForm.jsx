import React, { useState } from 'react';
import WorkExperienceFormGeneral from './WorkExperienceFormGeneral';
import WorkExperienceFormDetails from './WorkExperienceFormDetails';
import WorkExperienceFormRecap from './WorkExperienceFormRecap';

import '../styles/styles.css'; 

const WorkExperienceForm = ({ formData, onChange, onPrevStep, onNextStep }) => {
  // const [roles, setRoles] = useState([]);
  const roles = formData;
  const [step, setStep] = useState(0); // Current step
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedRoles = roles.map(role => 
      role.id === currentRoleIndex ? { ...role, [name]: value } : role
    );

    // Clear endDate if currentlyEmployed is true
    if (name === 'currentlyEmployed' && value === true) {
      updatedRoles = updatedRoles.map(role => 
        role.id === currentRoleIndex ? { ...role, ['endDate']: null } : role
      );
    }

    onChange(updatedRoles);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0: // WorkExperienceFormGeneral
        return (
          <WorkExperienceFormGeneral 
            formData={formData[currentRoleIndex]}
            onChange={handleChange}
          />
        );
      case 1: // WorkExperienceFormDetails
        return (
          <WorkExperienceFormDetails 
            formData={formData[currentRoleIndex]}
            onChange={handleChange}
          />
        );
      case 2: // WorkExperienceFormRecap
        return (
          <WorkExperienceFormRecap 
            formData={formData[currentRoleIndex]}
            onChange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  const handleAddRole = () => {
    setRoles([...roles, { title: '', description: '' }]);
  };

  const handleNextRole = () => {
    setCurrentRoleIndex(currentRoleIndex + 1);
  };

  const handlePreviousRole = () => {
    setCurrentRoleIndex(currentRoleIndex - 1);
  };

  const handleRoleChange = (e, field) => {
    const updatedRoles = [...roles];
    updatedRoles[currentRoleIndex][field] = e.target.value;
    setRoles(updatedRoles);
  };

  const handleFinish = () => {
    // Validate work experience data if needed
    // Save work experience data to state or send to server
    onNextStep(); // Call onNextStep to move to the next step in the form
  };

  return (
    <div>
      {renderStep()}
      <div>
        <button className="defaultButton" onClick={step > 0 ? prevStep : onPrevStep}>Prev</button>
        <button className="defaultButton" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
