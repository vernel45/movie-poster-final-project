import React from "react";
import { Link } from "react-router-dom";
import noPoster from "../assets/noPoster.png";

const Movies = ({ movies }) => {
  return (
    <div className="movies__list">
      {movies.slice(0, 15).map((movie) => (
        <Link
          to={`/movie/${movie.imdbID}`}
          key={movie.imdbID}
          className="movie__link"
        >
          <div className="movie__card">
            <img
              src={
                movie.Poster === "N/A"
                  ? noPoster
                  : movie.Poster
              }
              alt={movie.Title}
              className="movie__poster"
            />

            <h3 className="movie__title">
              {movie.Title}
            </h3>

            <p className="movie__year">
              {movie.Year}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Movies;