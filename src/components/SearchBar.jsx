import React from 'react';
import "./SearchBar.css"

function SearchBar() {

  return (
    <div className='searchBar-container'>
      <input
        type="text"
        className="searchBar-input"
        placeholder="Search by Artist, Genre, or City..."
      />
    </div>
  );
}

export default SearchBar;