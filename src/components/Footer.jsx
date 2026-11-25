import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/background.jpg";

const Footer = () => {
  return (
    <section id="footer">
      
      <img src={background} alt="" className="footer__background" />

      <div className="footer__overlay"></div>
      

      <div className="footer__container">
        <h2 className="footer__title">Movie Finder</h2>

        <p className="footer__description">
          Discover your favorite movies and explore a world of entertainment.
        </p>

        <div className="footer__links">
          <Link to="/" className="footer__link">
            Home
          </Link>

          <Link to="/movies" className="footer__link">
            Find Your Movies
          </Link>
        </div>

        <div className="footer__copyright">
          Copyright © 2026 Movie Finder. All Rights Reserved.
        </div>
      </div>
      
    </section>
  );
};

export default Footer;
