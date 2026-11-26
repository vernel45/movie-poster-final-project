import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=2ade860f&s=spider"
      );
      const data = await response.json();
      setMovies(data.Search || []);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
};

export default Movie;