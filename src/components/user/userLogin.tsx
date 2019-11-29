import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {initialState, User} from 'models/user';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router';
import Auth from 'util/auth';

export default function UserLogin() {
    const [user, setUser] = useState<User>(initialState);
    const endpoint = 'http://localhost:3000/auth';
    const history = useHistory();

    const postLogin = () => {
        axios.post(endpoint + '/login', user).then((res) => {
            Auth.login(user, res.data.sessionId).then((authenticated) => {
                if (authenticated) {
                    history.push('/user/profile');
                }
            });
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
            <div className="login_inner animated fadeIn">
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
