import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

export interface NavbarProps {
  toggleSidebar: any;
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav>
      <div className="logo" onClick={() => props.toggleSidebar()}>
        <FontAwesomeIcon icon={faBars} />
      </div>
        <Link className="brand" to={'/home'}>Free Charity</Link>
      <Link className="user" to={'/user/login'}>
        <div className="user_icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </Link>
    </nav>
  );
}
