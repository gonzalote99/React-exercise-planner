import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
  return(
    <nav className='main-nav'>
    <NavLink to='/' activeClassName='active-style'>home</NavLink>
      <NavLink to='/create-exercise' activeClassName='style-active'>create exercise</NavLink>
    </nav>
  );
};
