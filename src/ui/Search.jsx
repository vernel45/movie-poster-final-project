import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = ({ fetchMovies }) => {

  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    fetchMovies(searchTerm.trim() || [] )
  }

  return (
    <div className="search__container">

      <h1 className="search__title">
        Find Your Favorite Movies
      </h1>

      <p className="search__description">
        Discover your next favorite movie.
      </p>

      <form className="search__form" onSubmit={handleSearch}>

        <input
          className="search__bar"
          type="text"
          placeholder="Search movies by title..."
          aria-label="Search movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <button
          className="search__btn"
          type="submit"
          aria-label="Search"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

      </form>

    </div>
  )
}

export default Search