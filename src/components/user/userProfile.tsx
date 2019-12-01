import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {logoutUser} from 'util/auth';
import {User} from '../../models/user';
import {deleteLogin} from '../../store/actions/authActions';
import {getAnswerCountByUsername} from '../../api/answer';
import {getAvatar} from '../../util/avatars';

export default function UserProfile() {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();
    const user: User = useSelector(state => state.auth.user);

    useEffect(() => {
        getAnswerCountByUsername(true, user.username).then((count: number) => {
            setCorrectAnswers(count);
        });
    }, []);

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
                    <img src={getAvatar(user.avatar)} alt=""/>
                </div>
                <h3 className='text-center'>{user.username}</h3>
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
