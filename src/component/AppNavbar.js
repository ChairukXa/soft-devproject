import React from 'react'
import {Link} from 'react-router-dom'
import "./AppNavbar.css"

const AppNavbar = () => {
  return (
    <nav className='Navbar'>
      <div className='contrainer'> 
        <h3 className='logo'>YGO Community</h3> 
        <ul className='Nav-Links'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/rulebook"><li>RuleBook</li></Link>
          <Link to="/archetype"><li>Archetype</li></Link>
          <Link to="/search"><li>Search</li></Link>
          <Link to="/account"><li>Sign-In</li></Link>
        </ul>
      </div>
    </nav>
  );
}

export default AppNavbar