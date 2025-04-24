import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>RideSure</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Book a Car</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
