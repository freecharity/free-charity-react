import React from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faUser} from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className="user_details">Login / Register</div>
                </div>
                <div className="sidebar_links">
                    <div className="link selected">
                        <Link to={'/game'}>Game</Link>
                    </div>
                    <div className="link">
                        <Link to={'/categories'}>Categories</Link>
                    </div>
                    <div className="link">
                        <Link to={'/difficulty'}>Difficulty</Link>
                    </div>
                    <div className="link">
                        <Link to={'/profile'}>Profile</Link>
                    </div>
                    <div className="link">
                        <Link to={'/leaderboard'}>Leaderboard</Link>
                    </div>
                    <div className="link">
                        <Link to={'/donate'}>Donate</Link>
                    </div>
                </div>
                <div className="admin_sidebar_links">
                    <h2>Admin Links</h2>
                    <div className="link">
                        <Link to={'/questions'}>Questions</Link>
                    </div>
                    <div className="link">
                        <Link to={'/categories'}>Categories</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
