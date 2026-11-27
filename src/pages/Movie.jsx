import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=2ade860f&s=${query}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  useEffect(() => {
    fetchMovies("spider");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      fetchMovies(searchTerm);
    }
  };

 
return (
    <section id="movies">
      <div className="search__header">
        <h1 className="search__title">Search Movies</h1>

        <form onSubmit={handleSearch} className="search__bar">
          <input
            type="text"
            placeholder="Search for your favorite movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>
      </div>

      <Movies movies={movies} />
    </section>
  );
};

export default Movie;