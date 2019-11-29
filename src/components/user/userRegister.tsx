import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import axios from 'axios';
import auth from 'util/auth';
import {initialState, User} from 'models/user';

export default function Login() {
    const history = useHistory();
    const [user, setUser] = useState<User>(initialState);
    const endpoint = 'http://localhost:3000/auth';

    const postLogin = () => {
        if (user.password === (user).confirmPassword) {
            axios.post(endpoint + '/register', user).then((res) => {
                auth.login(user, res.data.sessionId).then((authenticated) => {
                    if (authenticated) {
                        history.push('/user/profile');
                    }
                });
            }).catch((err) => {
                alert(err);
            });
        } else {
            alert('Password must match!');
        }
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
        <div className="register_container">
            <div className="register_inner animated fadeIn">
                <h1>Create Profile</h1>
                <p>Track your progress, win badges and share with your friends</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Choose a username</label>
                        <input id="username"
                               name="username"
                               onChange={handleInputChange}
                               type="text"
                               required={true}/>
                    </div>
                    <div className="input-group">
                        <label>Your e-mail address</label>
                        <input id="email"
                               name="email"
                               onChange={handleInputChange}
                               type="text"
                               required={true}/>
                    </div>
                    <h2>Set a password</h2>
                    <div className="input-group">
                        <label>Insert a password</label>
                        <input id="password"
                               name="password"
                               onChange={handleInputChange}
                               type="password"
                               required={true}/>
                    </div>
                    <div className="input-group">
                        <label>Confirm the password</label>
                        <input id="confirmPassword"
                               name="confirmPassword"
                               onChange={handleInputChange}
                               type="password"
                               required={true}/>
                    </div>
                    <button>Create your account</button>
                </form>
                <p>
                    Already have an account? <Link to={'/user/login'}>Login</Link>
                </p>
                <div className="back-button">
                    <Link to={'/game'}>Back to game</Link>
                </div>
            </div>
        </div>
    );
}
