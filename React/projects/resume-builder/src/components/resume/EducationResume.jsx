import React from 'react';

const EducationResume = ({ formData }) => {
  const gradDate = new Date(formData.gradDate);
  const gradMonth = gradDate.toLocaleString('default', { month: 'long' });
  const gradYear = gradDate.getFullYear();
  const gradDateFormatted = gradMonth + ' ' + gradYear;

  return (
    <div className='educationContainer'>
      <h3 className='header'>Education</h3>
      <div className='schoolContainer'>
        <p className='schoolName'><b>{formData.schoolName}</b> - <i>{formData.location}</i></p>
        <p className='gradDate'>({formData.isPursuing ? `Expected Graduation: ${gradDateFormatted}`: gradDateFormatted})</p>
      </div>
      <p className='degree'>{`${formData.degree} in ${formData.major}, ${formData.details}`}</p>
    </div>
  );
};

export default EducationResume;