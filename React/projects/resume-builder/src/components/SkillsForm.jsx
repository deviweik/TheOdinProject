import React, { useState } from 'react';
import TileSelector from './TileSelector';

import '../styles/styles.css'; 

const SkillsForm = ({ onNextStep }) => {
  const [selectedSkill, setSelectedSkill] = useState(0);
  const [skills, setSkills] = useState([]);

  const onChange = (e) => {
    const { value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[selectedSkill] = { ...updatedSkills[selectedSkill], value };
    setSkills(updatedSkills);
  };

  console.log(skills);
  console.log(selectedSkill);

  return (
    <div className='formContainer'>
      <h2 className='defaultFormTitle'>Now let's show off those skills.</h2>
      <h4 className='defaultFormSubtitle'>Try to enter at least three bullets about skills you've developed that you were either unable to mention earlier or that you would like to specifically highlight.</h4>
      <textarea 
        className='defaultLongTextInput' 
        value={skills.length > 0 ? skills[selectedSkill].value : null}
        placeholder="Enter your skills here." 
        onChange={onChange}
      />
      <TileSelector 
        className='defaultTileSelector'
        options={skills} 
        setOptions={setSkills} 
        selectedId={selectedSkill} 
        setSelectedId={setSelectedSkill}
      />
    </div>
  );
}

export default SkillsForm;

