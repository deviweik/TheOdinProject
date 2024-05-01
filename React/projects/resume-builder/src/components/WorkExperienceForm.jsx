import React, { useState } from 'react';

import '../styles/styles.css'; 

const WorkExperienceForm = ({ onNextStep }) => {
  const [roles, setRoles] = useState([]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

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
      {roles.map((role, index) => (
        <div className="formContainer" key={index} style={{ display: index === currentRoleIndex ? 'block' : 'none' }}>
          <h2 className="formTitle">Time for your work experience.</h2>
          <input 
            className="defaultTextInput"
            type="text"
            value={role.title}
            onChange={(e) => handleRoleChange(e, 'title')}
            placeholder="Role Title"
          />
          <textarea
            className="defaultTextInput"
            value={role.description}
            onChange={(e) => handleRoleChange(e, 'description')}
            placeholder="Role Description"
          />
        </div>
      ))}
      <button className="defaultButton" onClick={handleAddRole}>Add Role</button>
      {currentRoleIndex > 0 && <button className="defaultButton" onClick={handlePreviousRole}>Previous Role</button>}
      {currentRoleIndex === roles.length - 1 && (
        <button className="defaultButton" onClick={handleFinish}>Finish Work Experience</button>
      )}
      {currentRoleIndex < roles.length - 1 && <button className="defaultButton" onClick={handleNextRole}>Next Role</button>}
    </div>
  );
};

export default WorkExperienceForm;
