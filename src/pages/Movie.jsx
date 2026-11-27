
import React, { useState, useEffect } from "react";
import Search from "../ui/Search";
import Movies from "./Movies";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const api = (`https://www.omdbapi.com/?apikey=2ade860f`);

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
    "Toy Story",
    "Finding Nemo",
    "Cars",
  ];

  // Fetch 15 default movies
  async function fetchMovies() {
    setLoading(true);
    setError("");

    try {
      const responses = await Promise.all(
        searchTerms.map((term) =>
          fetch(`${api}&t=${encodeURIComponent(term)}&type=movie`)
            .then((response) => response.json())
        )
      );

      const validMovies = responses.filter(
        (movie) => movie.Response === "True"
      );

      setMovies(validMovies.slice(0, 15));
    } catch (error) {
      setError("Unable to load movies. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Fetch movies from the search bar
  async function searchMovies(searchTerm) {
    if (!searchTerm.trim()) {
      fetchMovies();
      return;
    }

    setLoading(true);
    setError("");

    try {
      const responses = await Promise.all([
        fetch(
          `${api}&s=${encodeURIComponent(searchTerm)}&type=movie&page=1`
        ).then((response) => response.json()),

        fetch(
          `${api}&s=${encodeURIComponent(searchTerm)}&type=movie&page=2`
        ).then((response) => response.json()),
      ]);

      const allMovies = responses.flatMap(
        (response) => response.Search || []
      );

      const uniqueMovies = allMovies.filter(
        (movie, index, array) =>
          index === array.findIndex(
            (m) => m.imdbID === movie.imdbID
          )
      );

      setMovies(uniqueMovies.slice(0, 15));
    } catch (error) {
      setError("Unable to search movies. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Load default movies when the page opens
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section id="movies">
      <div className="movies__container">

        <Search searchMovies={searchMovies} />

        {loading ? (
          <p className="movies__message">Loading movies...</p>
        ) : error ? (
          <p className="movies__message">{error}</p>
        ) : movies.length === 0 ? (
          <p className="movies__message">No movies found.</p>
        ) : (
          <Movies movies={movies} />
        )}

      </div>
    </section>
  );
};

export default Movie;
