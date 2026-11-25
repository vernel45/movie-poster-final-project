import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import  './Nav.css'
import background from "../assets/background.jpg"
import logo from "../assets/logo.png"

const Nav = () => {
  return (  
                      
    <section id="nav"> 
   
     <img src={background} alt="" className="background__img" />
       <div className="nav__overlay"></div>
   <div className="navbar">
    

    <div className="logo">
        <img src={logo} alt="" className="logo__img" />
    </div>

         
          <div className="nav__links">
            <Link to="/" className="nav__link"> Home </Link>
            <Link to="/movie" className="nav__link"> Find Your Movies </Link>
            </div> 
            <div className="search__container">
                <h2 className="search__title"> Search Movies </h2>
                <div className="search__movies">
                <input className="search__bar" type="text"
                id="searchInput"
                placeholder="Search by Name and the find the best..." />
                <FontAwesomeIcon icon="magnifying-glass" />
              
                </div>   
                  </div>     
          <div className="menu" id="menu">
 
           <FontAwesomeIcon icon= "bars" />
            <div className="menu__links">
        <Link to="/" className="menu__link"> Home </Link>
            <Link to="/" className="menu__link"> Find Your Movies </Link>
           </div>
          </div>
        </div> 
              
    </section>
 
  )
}

export default Nav
