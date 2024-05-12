import React, { useState, useEffect } from 'react';
import TileSelector from '../helpers/TileSelector';

import '../../styles/styles.css'; 

const SkillsForm = ({ formData, onChange, setValidation }) => {
  const [selectedSkillId, setSelectedSkillId] = useState(0);
  const skills = formData;

  useEffect(() => {
    if (skills.length >= 3) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [formData, setValidation]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    console.log(`New value for skill #${selectedSkillId}: ${newValue}`);
    const updatedSkills = skills.map(skill => 
      skill.id === selectedSkillId ? { ...skill, value: newValue } : skill
    );
    onChange(updatedSkills);
  };

  const initializeNewSkill = () => {
    const newId = skills.length;
    const updatedSkills = [...skills, { id: newId, value: '' }]; 
    onChange(updatedSkills);
  }

  // const onChange = (e) => {
  //   const { value } = e.target;
  //   let updatedSkills = [...skills];

  //   if (skills.length === 0) {
  //     const newId = updatedSkills.length; // Generate ID for the new option
  //     updatedSkills = [...updatedSkills, { id: newId, value }]; // Add new option
  //     setSelectedSkillId(newId); // Select the new option
  //   } else {
  //     updatedSkills[selectedSkillId] = { id: selectedSkillId, value }; // Update existing empty skill
  //   }

  //   setSkills(updatedSkills);
  // };

  return (
    <div className='formContainer'>
      <h2 className='defaultFormTitle'>Now let's show off those skills.</h2>
      <h4 className='defaultFormSubtitle'>Try to enter at least three bullets about skills you've developed that you were either unable to mention earlier or that you would like to specifically highlight.</h4>
      <textarea 
        className='defaultLongTextInput' 
        value={selectedSkillId !== null && skills.length > selectedSkillId ? skills[selectedSkillId]?.value || '' : ''}
        placeholder="Enter your skills here." 
        onChange={handleChange}
      />
      <TileSelector 
        className='defaultTileSelector'
        options={skills} 
        onAddOption={initializeNewSkill} 
        selectedId={selectedSkillId} 
        setSelectedId={setSelectedSkillId}
      />
    </div>
  );
}

export default SkillsForm;

