import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {logoutUser} from 'util/auth';
import axios from 'axios';
import {User} from '../../models/user';
import {deleteLogin} from '../../store/actions/authActions';

export default function UserProfile() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user: User = useSelector(state => state.auth.user);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const session: any = sessionStorage.getItem('userSession');
    const username = session ? JSON.parse(session).username : undefined;

    useEffect(() => {
        getCorrectAnswers();
    }, []);

    const getCorrectAnswers = () => {
        axios.get(`http://localhost:3000/answers?page=1&deleted=0&correct=0&username=${username}`).then((response) => {
            const total = response.data.total;
            if (total) {
                setCorrectAnswers(total);
            }
        });
    };

    const logout = async () => {
        logoutUser(user).finally(() => {
            history.push('/user/login/');
            dispatch(deleteLogin());
        });
    };

    return (
        <div className="user-profile_container">
            <div className="user-profile_inner animated fadeIn">
                <div className="avatar">
                    <img src="" alt=""/>
                </div>
                <h3 className='text-center'>{username ? username : ''}</h3>
                <p>You have donated <b>{correctAnswers * 10}</b> grains of rice.</p>
                <p>You have answered <b>{correctAnswers}</b> questions correctly.</p>
                <p>Your best subject is Computer Science.</p>
                <div className="buttons">
                    <button
                        className='orange'
                        onClick={() => history.push('/user/profile/edit')}>
                        Edit profile
                    </button>
                    <button
                        className='orange'
                        onClick={() => history.push('/game')}>
                        Back to game
                    </button>
                    <button
                        className='gray'
                        onClick={logout}>Log out
                    </button>
                </div>
            </div>
        </div>
    );
}
