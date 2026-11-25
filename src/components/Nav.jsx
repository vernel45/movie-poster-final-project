import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Nav = () => {
  return (  
                      
    <section id="nav"> 
   
     
   <div className="navbar">
    

    <div className="logo">
        <img src={logo} alt="" className="logo__img" />
    </div>

         
          <div className="nav__links">
            <Link to="/" className="nav__link"> Home </Link>
            <Link to="/movie" className="nav__link"> Find Your Movies </Link>
            </div> 
            
                  </div>     
          <div className="menu" id="menu">
 
           <FontAwesomeIcon icon= "bars" />
            <div className="menu__links">
        <Link to="/" className="menu__link"> Home </Link>
            <Link to="/movie" className="menu__link"> Find Your Movies </Link>
           </div>
          </div>
       
            
    </section>
 
  )
}

export default Nav
