import React from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
   <Router>
    <Nav />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/movie" element={<Movie />} />
<Route path="/movie/:id" element={<MovieDetails />} />
  
  </Routes>  
  <Footer />  
   </Router>
  );
}

export default App;
