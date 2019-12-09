import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router';
import {loginUser} from '../../util/auth';
import {AxiosError} from 'axios';
import {saveLogin} from '../../store/actions/authActions';
import {Login} from '../../models/auth';

interface UserLogin {
    username: string;
    password: string;
}

export default function UserLogin() {
    const dispatch = useDispatch();
    const [login, setLogin] = useState<UserLogin>({
        username: '',
        password: ''
    });
    const history = useHistory();

    const postLogin = () => {
        loginUser(login.username, login.password).then((login: Login) => {
            dispatch(saveLogin(login));
            history.push('/user/profile');
        }).catch((error: AxiosError) => {
            const message = error.response ? error.response.data.message : '';
            if (message != '') {
                alert(message);
            }
        });
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        event.persist();
        setLogin({
            ...login,
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
                    <Link to={'/home'}>Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
