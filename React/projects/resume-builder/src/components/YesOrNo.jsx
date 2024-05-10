import React from 'react';

import '../styles/styles.css'; 

const YesOrNo = ({question, state, setState}) => {

  const handleButtonClick = (value) => {
    // console.log('Clicked', value);
    setState(value); // Update the state based on the button clicked
  };

  return (
    <div className="yesOrNoContainer">
      <p>{question}</p>
      <button 
        className={`yesOrNoButton ${state === true ? 'selected' : ''}`}
        onClick={() => handleButtonClick(true)}
      >
        Yes
      </button>
      <button 
        className={`yesOrNoButton ${state === false ? 'selected' : ''}`}
        onClick={() => handleButtonClick(false)}
      >
        No
      </button>
    </div>
  );
}

export default YesOrNo;