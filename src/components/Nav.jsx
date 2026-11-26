import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import logo from "../assets/logo.png"
import Menu from '../ui/Menu'

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
            
                     
         <Menu />
                        </div>
       
            
    </section>
 
