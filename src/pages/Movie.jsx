import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Movie = () => {
  return (
   <div className="search__container">
                <h2 className="search__title"> Search Movies </h2>
                <div className="search__movies">
                <input className="search__bar" type="text"
                id="searchInput"
                placeholder="Search by Name and the find the best..." />
                <FontAwesomeIcon icon="magnifying-glass" />
              
                </div>   
  )
}

export default Movie
