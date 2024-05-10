import React from 'react';

const TileSelector = ({ options, onAddOption, selectedId, setSelectedId }) => {
  const handleOptionClick = (id) => {
    setSelectedId(id);
  };

  const handleAddOption = () => {
    onAddOption();
    setSelectedId(options.length);
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