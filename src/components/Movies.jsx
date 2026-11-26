import React from 'react'
import { Link } from 'react-router-dom'


const Movies = ( { movies }) => {
  return (
    <div className="movies__list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie__card">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  )
}

export default Movies
