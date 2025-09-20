import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.components/SearchBar.css";

function SearchBar() {
  const [keyword, setKeyword] = useState("");

  const navigateTo = useNavigate();

  const handleFilter = (e) => {
    e.preventDefault();

    if (keyword != "") {
      navigateTo(`/concerts?keyword=${encodeURIComponent(keyword)}`);
      window.location.reload();
    }
  };

  return (
    <div className="searchBar-container">
      <form
        data-testid="cypress-filter"
        onSubmit={handleFilter}
        id="form-size-control-filter"
      >
        <input
          data-testid="cypress-filter-input-keyword"
          type="text"
          className="searchBar-input"
          placeholder="Search by Artist, Genre, or City..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
