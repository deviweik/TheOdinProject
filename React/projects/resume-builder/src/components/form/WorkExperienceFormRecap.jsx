import React, { useEffect } from 'react';

import '../../styles/styles.css'; 

const WorkExperienceFormRecap = ({formData, onChange, setValidation}) => {
  useEffect(() => {
    if (true) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [formData, setValidation]);

  return (
    <div>
      <p>WorkExperienceFormRecap</p>
    </div>
  );
}

export default WorkExperienceFormRecap;