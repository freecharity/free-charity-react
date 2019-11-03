import React from 'react';
import './Navbar.scss';

export interface INavbar {}

const Navbar = () => (
  <nav>
    <div className="logo">
      <div className="link">React Typescript</div>
    </div>
    <div className="links">
      <div className="link">Home</div>
    </div>
  </nav>
);

export default Navbar;
