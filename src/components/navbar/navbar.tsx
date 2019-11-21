import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faUser} from '@fortawesome/free-solid-svg-icons';
import {toggleSidebar} from '../../store/actions';

export default function Navbar() {
    const dispatch = useDispatch();

    return (
        <nav>
            <div className="logo" onClick={() => dispatch(toggleSidebar(true))}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <Link className="brand" to={'/home'}>Free Charity</Link>
            <Link className="user" to={'/user/login'}>
                <div className="user_icon">
                    <FontAwesomeIcon icon={faUser}/>
                </div>
            </Link>
        </nav>
    );
}
