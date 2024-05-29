import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    
  return (
    <div>
        <nav className="navbar">
      <div className="navbar-logo">
        <img src='/src/assets/images/log.png' alt="Maangal Bazaar Logo" />
      </div>
      <div className="navbar-links">
        <a href="#venues">Venues</a>
        <a href="#weddingcategories">Vendors</a>
        <a href="#blog">Blog</a>
      </div>
      <div className="navbar-search">
        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
        <input type="text" placeholder="   Search Venues or vendors" />
        <button>Login</button>
      </div>
    
        
      
    </nav>
    </div>
  )
}

export default Navbar