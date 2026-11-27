import React from 'react'
import background from '../assets/background.jpg'
import { Link } from "react-router-dom";

const Home = () => {
  return (
   
    <section id="home">
      <img
        src={background}
        alt=""
        className="home__background"
      />

      <div className="home__content">
        <h1 className="home__title">
          Welcome to Movie Finder
        </h1>

        <p className="home__para">
          Discover new movies, explore your favorites, and find
          your next movie to watch!
        </p>

        <Link to="/movie" className="home__btn">
          Find Your Movies
        </Link>
      </div>
    </section>
  );
};

export default Home;
  