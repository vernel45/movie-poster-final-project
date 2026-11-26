import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Movie = () => {
  return (
    <div className="search__container">
      <h2 className="search__title"> Search Movies </h2>
      <div className="search__movies">
        <input
          className="search__bar"
          type="text"
          id="searchInput"
          placeholder="Search by Name and the find the best..."
        />
        <FontAwesomeIcon icon="magnifying-glass" />
      </div>
    </div>
  );
};

{
  movie.map((movie) => (
    <Link
      to={`/movie/${movie.imdbID}`}
      key={movie.imdbID}
      className="movie__link"
    >
      <div className="movie__card">
        <img src={movie.Poster} alt={movie.Title} className="movie__poster" />

        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </Link>
  ));
}

export default Movie;
