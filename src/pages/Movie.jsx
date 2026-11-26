import React, { useEffect } from 'react'

const Movie = () => {

useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=2ade860f&i=love"
      );
      const data = await response.json();
      console.log(data);
    };

    fetchMovies();
  }, [id]); 

  return (
    <div>
      
    </div>
  )
}

export default Movie
