import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const API_KEY = "2ade860f";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

 <div className="search__movie--container">
                        <h1 className="movie__search">
                            Search Movies
                        </h1>
                        <div className="searchbar--container">
                            <input
                                className="search__bar"
                                type="text"
                                id="search__Input"
                            />
                                <FontAwesomeIcon icon="magnifying-glass" />
                        </div>
                    </div>


 
};

export default Search;
