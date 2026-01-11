import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Pokemon by name..."
        value={inputValue}
        onChange={handleInputChange}
        className="search-box"
      />
    </div>
  );
};

export default SearchBox;