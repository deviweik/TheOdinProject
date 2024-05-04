import React, { useState } from 'react';
import TileSelector from './TileSelector';

import '../styles/styles.css'; 

const SkillsForm = ({ formData, onNextStep }) => {
  const [selectedSkillId, setSelectedSkillId] = useState(0);
  const [skills, setSkills] = useState([]);

  const onChange = (e) => {
    const { value } = e.target;
    let updatedSkills = [...skills];

    if (skills.length === 0) {
      const newId = updatedSkills.length; // Generate ID for the new option
      updatedSkills = [...updatedSkills, { id: newId, value }]; // Add new option
      setSelectedSkillId(newId); // Select the new option
    } else {
      updatedSkills[selectedSkillId] = { id: selectedSkillId, value }; // Update existing empty skill
    }

    setSkills(updatedSkills);
  };

  console.log(skills);
  console.log(selectedSkillId);

  return (
    <div className='formContainer'>
      <h2 className='defaultFormTitle'>Now let's show off those skills.</h2>
      <h4 className='defaultFormSubtitle'>Try to enter at least three bullets about skills you've developed that you were either unable to mention earlier or that you would like to specifically highlight.</h4>
      <textarea 
        className='defaultLongTextInput' 
        value={selectedSkillId !== null && skills.length > selectedSkillId ? skills[selectedSkillId]?.value || '' : ''}
        placeholder="Enter your skills here." 
        onChange={onChange}
      />
      <TileSelector 
        className='defaultTileSelector'
        options={skills} 
        setOptions={setSkills} 
        selectedId={selectedSkillId} 
        setSelectedId={setSelectedSkillId}
      />
    </div>
  );
}

export default SkillsForm;

