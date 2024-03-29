import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSidebar} from '../../store/actions/';
import {User} from '../../models/user';
import {getAvatar} from '../../util/avatars';

export default function Sidebar() {
    const dispatch = useDispatch();
    const closed = useSelector(state => state.sidebar.closed);
    const userLevel = useSelector(state => state.auth.userLevel);
    const user: User = useSelector(state => state.auth.user);

    const closeSidebar = () => {
        dispatch(toggleSidebar(closed));
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={`sidebar_container ${closed ? 'hidden' : ''}`} onClick={closeSidebar}>
            <div className={`sidebar_inner ${closed ? 'closed' : ''}`} onClick={stopPropagation}>
                <div className="sidebar_panel">
                    <div className="close" onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                    <NavLink className="profile"
                             to={'/user/profile'}
                             onClick={closeSidebar}>
                        <div className="avatar">
                            {user ? <img src={getAvatar(user.avatar)} alt=""/> : <img src='' alt=""/>}
                        </div>
                        <div className="username">
                            {user ? user.username : 'Login / Register'}
                        </div>
                    </NavLink>
                    <div className="links">
                        <NavLink className="link"
                                 activeClassName='selected'
                                 exact={true}
                                 to={'/home'}
                                 onClick={closeSidebar}>
                            Home
                        </NavLink>
                        <NavLink className="link"
                                 activeClassName='selected'
                                 exact={true}
                                 to={'/game'}
                                 onClick={closeSidebar}>
                            Game
                        </NavLink>
                        <NavLink className="link"
                                 to={'/donate'}
                                 activeClassName='selected'
                                 exact={true}
                                 onClick={closeSidebar}>
                            Donate
                        </NavLink>
                        <NavLink className="link"
                                 to={'/category'}
                                 activeClassName='selected'
                                 exact={true}
                                 onClick={closeSidebar}>
                            Categories
                        </NavLink>
                        <NavLink className="link"
                                 to={'/leaderboard'}
                                 activeClassName='selected'
                                 exact={true}
                                 onClick={closeSidebar}>
                            Leaderboard
                        </NavLink>
                        {userLevel == 2 ?
                            <div>
                                <NavLink className="link"
                                         to={'/categories'}
                                         activeClassName='selected'
                                         exact={true}
                                         onClick={closeSidebar}>
                                    Categories (Admin)
                                </NavLink>
                                <NavLink className="link"
                                         to={'/questions'}
                                         activeClassName='selected'
                                         exact={true}
                                         onClick={closeSidebar}>
                                    Questions (Admin)
                                </NavLink>
                                <NavLink className="link"
                                         to={'/answers'}
                                         activeClassName='selected'
                                         exact={true}
                                         onClick={closeSidebar}>
                                    Answers (Admin)
                                </NavLink>
                            </div> : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};
