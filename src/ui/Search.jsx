import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const movieName = search.trim();

    if (!movieName) return;

    onSearch(movieName);
    setSearch("");
  };

  return (
    <div className="search__container">
      <h1 className="search__title">Search Movies</h1>

      <form
        className="search__movies"
        onSubmit={handleSubmit}
      >
        <input
          className="search__bar"
          type="text"
          placeholder="Search movies by title..."
          aria-label="Search movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="search__btn"
          type="submit"
          aria-label="Submit search"
        >
          <FontAwesomeIcon icon="magnifying-glass" />
        </button>
      </form>
    </div>
  );
};

export default Search;