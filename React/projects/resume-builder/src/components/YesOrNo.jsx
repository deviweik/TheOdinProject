import React from 'react';

import '../styles/styles.css'; 

const YesOrNo = ({question, isInverted, state, setState}) => {

  const handleButtonClick = (value) => {
    // console.log('Clicked', value);
    const newValue = isInverted ? !value : value;
    setState(newValue);
  };

  return (
    <div className="yesOrNoContainer">
      <p>{question}</p>
      <button 
        className={`yesOrNoButton ${state === (!isInverted ? true : false) ? 'selected' : ''}`}
        onClick={() => handleButtonClick(true)}
      >
        Yes
      </button>
      <button 
        className={`yesOrNoButton ${state === (!isInverted ? false : true) ? 'selected' : ''}`}
        onClick={() => handleButtonClick(false)}
      >
        No
      </button>
    </div>
  );
}

export default YesOrNo;