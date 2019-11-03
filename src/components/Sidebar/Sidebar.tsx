import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  closed: boolean;
  toggleSidebar: any;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div className={`sidebar_container ${props.closed ? 'closed' : ''}`}>
      <div className="sidebar_inner">
        <div className="sidebar_close">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => props.toggleSidebar()}
          />
        </div>
        <div className="sidebar_user">
          <div className="user_icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="user_details">Login / Register</div>
        </div>
        <div className="sidebar_links">
          <div className="link selected">
            <Link>Game</Link>
          </div>
          <div className="link">
            <Link>Categories</Link>
          </div>
          <div className="link">
            <Link>Difficulty</Link>
          </div>
          <div className="link">
            <Link>Profile</Link>
          </div>
          <div className="link">
            <Link>Leaderboard</Link>
          </div>
          <div className="link">
            <Link>Donate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
