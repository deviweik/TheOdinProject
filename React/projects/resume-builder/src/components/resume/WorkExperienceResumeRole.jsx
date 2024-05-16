import React from 'react';

const WorkExperienceResumeRole = ({ role, index }) => {
  const startDate = new Date(role.startDate);
  const startMonth = startDate.toLocaleString('default', { month: 'long' });
  const startYear = startDate.getFullYear();
  let hasEndDate = false;
  let endMonth = '';
  let endYear = '';

  if (role.endDate) {
    const endDate = new Date(role.endDate);
    endMonth = endDate.toLocaleString('default', { month: 'long' });
    endYear = endDate.getFullYear();
    hasEndDate = true;
  }

  return (
    <div key={index} className='roleContainer'>
        <div className='header'>
          <p className='company'>{role.companyName} - <i>{role.location}</i></p>
          <div className='titleContainer'>
            <p className='title'><b>{role.jobTitle}</b></p>
            <p className='dateRange'>({startMonth + ' ' + startYear + ' - ' + (hasEndDate ? endMonth + ' ' + endYear : 'Present')})</p>
          </div>
        </div>
        <div className='bulletsContainer'>
          <ul className='bulletsList'>
            {role.bullets.map((bullet, index) => (
              <li key={index} className='bullet'>{bullet.value}</li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default WorkExperienceResumeRole;