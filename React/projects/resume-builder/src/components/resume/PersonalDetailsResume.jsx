import React from 'react';

const PersonalDetailsResume = ({ formData }) => {
  return (
    <div className='personalDetailsContainer'>
      <div className='nameContainer'>
        <h1 className='name'>{formData.name}</h1>
      </div>
      <div className='othersContainer'>
        <p className='address'>{formData.address}</p>
        <p>|</p>
        <p className='email'>{formData.email}</p>
        <p>|</p>
        <p className='phoneNumber'>{formData.phoneNumber}</p>
      </div>
    </div>
  );
};

export default PersonalDetailsResume;