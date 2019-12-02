import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSidebar} from 'store/actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faUser} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const dispatch = useDispatch();
    const userLevel = useSelector(state => state.auth.userLevel);

    return (
        <nav>
            <div className="logo" onClick={() => dispatch(toggleSidebar(true))}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <Link className="brand" to={'/home'}>🍚 Rice Share 🍚</Link>
            {userLevel > 0 ?
                <Link className="user" to={'/user/login'}>
                    <div className="user_icon">
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                </Link>
                : <Link className="user" to={'/user/profile'}>
                    <div className="user_icon">
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                </Link>}
        </nav>
    );
}
