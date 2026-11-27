import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Movies from "../components/Movies";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const api = "https://www.omdbapi.com/?apikey=2ade860f";

  const searchTerms = [
    "The Lion King",
    "Beauty and the Beast",
    "Aladdin",
    "Frozen",
    "Moana",
    "Tangled",
    "Cinderella",
    "The Little Mermaid",
    "Encanto",
    "Lilo & Stitch",
    "Mulan",
    "Pocahontas",
  ];

  // Fetch default movies
  async function fetchMovies() {
    const responses = await Promise.all(
      searchTerms.map((term) =>
        fetch(`${api}&s=${encodeURIComponent(term)}`).then(
          (response) => response.json()
        )
      )
    );

    const allMovies = responses.flatMap(
      (response) => response.Search || []
    );

    const uniqueMovies = allMovies.filter(
      (movie, index, array) =>
        index === array.findIndex((m) => m.imdbID === movie.imdbID)
    );

    setMovies(uniqueMovies.slice(0, 15));
  }

  // Fetch movies from the search bar
  async function searchMovies(searchTerm) {
    if (!searchTerm.trim()) {
      fetchMovies();
      return;
    }

    const response = await fetch(
      `${api}&s=${encodeURIComponent(searchTerm)}`
    );

    const data = await response.json();

    setMovies(data.Search || []);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movies__container">
      <Search searchMovies={searchMovies} />
      <Movies movies={movies} />
    </div>
  );
};

export default Movie;