import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ searchMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(searchTerm.trim());
  };

  return (
    <div className="search__container">
      <h1 className="search__title">Search Movies</h1>

      <form
        className="search__form"
        onSubmit={handleSubmit}
      >
        <input
          className="search__bar"
          type="text"
          placeholder="Search movies by title..."
          aria-label="Search movies"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />

        <button
          className="search__btn"
          type="submit"
          aria-label="Submit search"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default Search;