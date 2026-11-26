import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
    <section id="movie__details">
      <h1>Movie Details</h1>
    </section>
  );
};

export default MovieDetails;


