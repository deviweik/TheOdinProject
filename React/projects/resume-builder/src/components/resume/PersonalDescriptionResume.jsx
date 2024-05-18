import React from 'react';

const PersonalDescriptionResume = ({ formData }) => {
  return (
    <div className='personalDescriptionContainer'>
      <p className='personalDescription'>{formData}</p>
    </div>
  );
};

export default PersonalDescriptionResume;