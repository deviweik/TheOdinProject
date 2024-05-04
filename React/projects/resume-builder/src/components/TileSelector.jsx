import React from 'react';

const TileSelector = ({ options, setOptions, selectedId, setSelectedId }) => {
  const handleOptionClick = (id) => {
    setSelectedId(id);
  };

  const handleAddOption = () => {
    const newId = options.length; // Generate ID for the new option
    setOptions([...options, { id: newId, value: null }]); // Add new option
    setSelectedId(newId); // Select the new option
    console.log('Selected Skill ID after adding:', newId); // Add this line
  };

  return (
    <div className="tileSelectorContainer">
      {options.map((option) => (
        <button
          key={option.id}
          className={`tile ${selectedId === option.id ? 'selected' : ''}`}
          onClick={() => handleOptionClick(option.id)}
        >
          {option.id + 1}
        </button>
      ))}
      <button className="tile addButton" onClick={handleAddOption}>+</button>
    </div>
  );
};

export default TileSelector;