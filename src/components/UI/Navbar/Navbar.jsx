import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <NavLink className="navbar__link" to="/about">
          About
        </NavLink>
        <NavLink className="navbar__link" to="/posts">
          Posts
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
