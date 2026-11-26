import React from "react";

const Search = () => {
  return (
    <div className="searchmovie--container">
      <h1 className="moviesearch">Search Movies</h1>
      <div className="searchbar--container">
        <input className="searchbar" type="text" id="searchInput" />
        <FontAwesomeIcon icon="magnifying-glass" />
      </div>
    </div>
  );
};

export default Search;
