import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import {registerUser} from '../../util/auth';
import {saveLogin} from '../../store/actions/authActions';
import {useDispatch} from 'react-redux';
import {Login} from '../../models/auth';
import {AxiosError} from 'axios';
import {validateEmail, validatePasswords, validateUsername} from "../../util/validation";

interface RegisterForm {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [form, setForm] = useState<RegisterForm>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const postRegister = () => {
        if (validateUsername(form.username) &&
            validateEmail(form.email) &&
            validatePasswords(form.password, form.confirmPassword)) {
            registerUser(form.username, form.password, form.email).then((login: Login) => {
                dispatch(saveLogin(login));
                history.push('/user/profile');
            }).catch((error: AxiosError) => {
                const response = error.response;
                if (response != null) {
                    const message = response.data.message;
                    if (message) {
                        alert(message);
                    } else {
                        alert('An error has occurred!');
                    }
                } else {
                    alert('An error has occurred!');
                }
            });
        }
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        event.persist();
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
        console.log(form);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }
        postRegister();
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
