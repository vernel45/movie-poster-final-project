import React, { useState, useEffect } from 'react'

const Movies = () => {

  const [movies, setMovies] = useState([])

  const api = 'https://www.omdbapi.com/?apikey=2ade860f'

  const searchTerms = [
    'Batman',
    'Superman',
    'Avengers',
    'Spider-Man',
    'Harry Potter',
    'Transformers'
  ]

  async function fetchMovies() {
    const responses = await Promise.all(
      searchTerms.map((term) =>
        fetch(`${api}&s=${encodeURIComponent(term)}`)
          .then((response) => response.json())
      )
    )

    const allMovies = responses.flatMap(
      (response) => response.Search || []
    )

    setMovies(allMovies)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

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