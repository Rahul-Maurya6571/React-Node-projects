import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    
    <nav className="navbar">
    <ul>
      
      <li><Link to="/landingpage">Landing Page</Link></li>
      <li><Link to="/postview">Post View</Link></li>
      <li><Link to="/post">Post</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar