import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Destination Picker</Link>
        <ul className='right'>
          <li><Link to='/create'>Create Destination</Link></li>
          <li><NavLink to='/destinations'>List Destinations</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
