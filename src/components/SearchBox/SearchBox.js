import React from 'react';

import './SearchBox.scss';

const SearchBox = ({ placeholder, handleTextChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleTextChange}
      />
    </div>
  );
};

export { SearchBox as default };
