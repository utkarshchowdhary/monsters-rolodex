import React from 'react';

import './SearchBox.scss';

const SearchBox = ({ placeholder, searchText, handleTextChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        value={searchText}
        placeholder={placeholder}
        onChange={handleTextChange}
      />
    </div>
  );
};

export { SearchBox as default };
