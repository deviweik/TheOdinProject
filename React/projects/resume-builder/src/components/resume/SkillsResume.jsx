import React from 'react';

const SkillsResume = ({ formData }) => {
  return (
    <div className='skillsContainer'>
      <h3 className='header'>Additional Skills</h3>
      <div className='skillsListContainer'>
          <ul className='skillsList'>
            {formData.map((skill) => (
              <li key={skill.id} className='skill'>{skill.value}</li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default SkillsResume;