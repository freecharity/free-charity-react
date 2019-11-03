import React from 'react';
import './Logo.scss';

const reactIcon = require('assets/img/react-icon.png');

export interface ILogo {}

const Logo = () => (
  <div className="container">
    <img className="logo spin-clockwise" src={reactIcon} alt="react_logo" />
  </div>
);

export default Logo;
