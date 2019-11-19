import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
    closed: boolean;
    toggleSidebar: any;
}

export default function Sidebar(props: SidebarProps) {

    const closeSidebar = () => {
        props.toggleSidebar();
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={`sidebar_container ${props.closed ? 'hidden' : ''}`} onClick={closeSidebar}>
            <div className={`sidebar_inner ${props.closed ? 'closed' : ''}`} onClick={stopPropagation}>
                <div className="sidebar_panel">
                    <div className="close" onClick={() => props.toggleSidebar()}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                    <NavLink className="profile"
                             to={'/user/profile'}
                             onClick={() => props.toggleSidebar()}>
                        <div className="avatar">
                            <img src="" alt=""/>
                        </div>
                        <div className="username">
                            Jason
                        </div>
                    </NavLink>
                    <div className="links">
                        <NavLink className="link"
                                 activeClassName='selected'
                                 exact={true}
                                 to={'/home'}
                                 onClick={() => props.toggleSidebar()}>
                            Home
                        </NavLink>
                        <NavLink className="link"
                                 activeClassName='selected'
                                 exact={true}
                                 to={'/game'}
                                 onClick={() => props.toggleSidebar()}>
                            Game
                        </NavLink>
                        <NavLink className="link"
                                 to={'/donate'}
                                 activeClassName='selected'
                                 exact={true}
                                 onClick={() => props.toggleSidebar()}>
                            Donate
                        </NavLink>
                        <NavLink className="link"
                                 to={'/category'}
                                 activeClassName='selected'
                                 exact={true}
                                 onClick={() => props.toggleSidebar()}>
                            Categories
                        </NavLink>
                        <NavLink className="link"
                                 to={'/leaderboard'}
                                 activeClassName='selected'
                                 exact={true}
                                 onClick={() => props.toggleSidebar()}>
                            Leaderboard
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
