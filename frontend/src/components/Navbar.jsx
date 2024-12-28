
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My App</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/create">Create</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
