import React from 'react';
import WorkExperienceResumeRole from './WorkExperienceResumeRole';

const WorkExperienceResume = ({ formData }) => {
  const date = new Date(formData.roles[0].startDate);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return (
    <div className='workExperienceContainer'>
      <h3 className='header'>Professional Experience</h3>
      {formData.roles.map((role) => (
        <WorkExperienceResumeRole key={role.id} role={role} />
      ))}
    </div>
  );
};

export default WorkExperienceResume;