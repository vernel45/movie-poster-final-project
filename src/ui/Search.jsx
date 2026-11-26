import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = ({ fetchMovies }) => {

  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    fetchMovies(searchTerm.trim() || 'batman')
  }

  return (
    <div className="search__container">

      <h1 className="search__title">Search Movies</h1>

      <form className="search__form" onSubmit={handleSearch}>

        <input
          className="search__bar"
          type="text"
          placeholder="Search by Name and find the best..."
          aria-label="Search movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <button className="search__btn" type="submit" aria-label="Search">
          <FontAwesomeIcon icon="magnifying-glass" />
        </button>

      </form>

    </div>
  )
}

export default Search
