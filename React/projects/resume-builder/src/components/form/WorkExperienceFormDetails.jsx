import React, { useState, useEffect } from 'react';
import TileSelector from '../helpers/TileSelector';
import YesOrNo from '../helpers/YesOrNo';

import '../../styles/styles.css'; 

const WorkExperienceFormDetails = ({ formData, onChange, setValidation }) => {
  const bullets = formData.bullets;

  const [selectedBulletId, setSelectedBulletId] = useState(0);

  useEffect(() => {
    if (bullets.length >= 3) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [formData, setValidation]);

  const updateBullets = (e) => {
    const newBullet = e.target.value;
    const updatedBullets = bullets.map(bullet =>
      bullet.id === selectedBulletId ? { ...bullet, value: newBullet } : bullet
    );
    console.log(updatedBullets);
    const event = {
      target: {
        value: updatedBullets,
        name: 'bullets'
      }
    };
    onChange(event);
  };

  const initializeNewBullet = () => {
    const newId = bullets.length;
    const updatedBullets = [...bullets, {id: newId, value: ''}];
    const event = {
      target: {
        value: updatedBullets,
        name: 'bullets'
      }
    };
    onChange(event);
  };

  const setIsLastRole = (newValue) => {
    console.log(newValue);
    const event = {
      target: {
        value: newValue,
        name: 'isLastRole'
      }
    };
    onChange(event);
  }

  return (
    <div className='formContainer'>
      <h2 className='formTitle'>Let's hear a little more about your role as {formData.jobTitle} at {formData.companyName}.</h2>
      <h4 className='formSubtitle'>Try to enter at least three bullets about your responsibilities and achievements during your time in this role.</h4>
      <textarea 
        className='defaultLongTextInput' 
        value={bullets[selectedBulletId].value || ''}
        placeholder="Enter more details about your role here." 
        onChange={updateBullets}
      />
      <TileSelector 
        className='defaultTileSelector'
        options={bullets} 
        onAddOption={initializeNewBullet} 
        selectedId={selectedBulletId} 
        setSelectedId={setSelectedBulletId}
      />
      <YesOrNo
        question="Have another role to enter?"
        isInverted={true}
        state={formData.isLastRole}
        setState={setIsLastRole}
      />
    </div>
  );
}

export default WorkExperienceFormDetails;