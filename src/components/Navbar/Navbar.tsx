import React from 'react';
import './Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

export interface NavbarProps {
  toggleSidebar: any;
}

const Navbar = (props: NavbarProps) => (
  <nav>
    <div className="logo" onClick={() => props.toggleSidebar()}>
      <FontAwesomeIcon icon={faBars} />
    </div>
    <div className="brand">Free Charity</div>
    <div className="user">
      <div className="user_name">Login / Register</div>
      <div className="user_icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  </nav>
);

export default Navbar;
