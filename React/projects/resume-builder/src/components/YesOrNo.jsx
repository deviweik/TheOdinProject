import React, { useState } from 'react';

import '../styles/styles.css'; 

const YesOrNo = ({question}) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const buttonStyle = {
    height: '32px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#3498db',
    color: '#fff',
    cursor: 'pointer',
    // transition: 'background-color 0.3s ease', // Smooth transition for hover effect
    // ':hover': {
    //   backgroundColor: '#2980b9',
    // },
  };

  return (
    <div style={containerStyle}>
      <p>{question}</p>
      <button style={buttonStyle}>Yes</button>
      <button style={buttonStyle}>No</button>
    </div>
  );
}

export default YesOrNo;