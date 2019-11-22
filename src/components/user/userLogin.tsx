import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useHistory} from 'react-router';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {initialState, User} from 'models/user';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {UserSession} from '../../models/session';
import {loginUser} from '../../store/actions';

export default function UserLogin() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState<User>(initialState);
    const endpoint = 'http://localhost:3000/auth';

    const postLogin = () => {
        axios.post(endpoint + '/login', user).then((res) => {
            const userSession: UserSession = {
                username: user.username,
                sessionId: res.data.sessionId
            };
            dispatch(loginUser(user));
            sessionStorage.setItem('userSession', JSON.stringify(userSession));
            history.push('/user/profile');
        }).catch((err) => {
            alert(err);
        });
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        event.persist();
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }
        postLogin();
    };

    return (
        <div className="login_container">
            <div className="login_inner">
                <h1>User Profile</h1>
                <p>Track your progress, win badges and share with your friends</p>
                <h2>Sign Up</h2>
                <Link to={'/user/register'}>
                    <FontAwesomeIcon icon={faEnvelope}/> Create new
                    account
                </Link>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Username</label>
                        <input id="username"
                               name="username"
                               onChange={handleInputChange}
                               type="text"
                               required={true}/>
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input id="password"
                               name="password"
                               onChange={handleInputChange}
                               type="password"
                               required={true}/>
                    </div>
                    <button>Login</button>
                </form>
                <div className="back-button">
                    <Link to={'/game'}>Back to game</Link>
                </div>
            </div>
        </div>
    );
}
