import React from 'react';
import {useHistory} from 'react-router';
import auth from 'util/auth';

export default function UserProfile() {
    const history = useHistory();

    const navigate = (url: string) => {
        history.push(url);
    };

    const logout = () => {
        auth.logout().then((authenticated) => {
            if (!authenticated) {
                navigate('/user/login');
            }
        });
    };

    return (
        <div className="user-profile_container">
            <div className="user-profile_inner">
                <div className="avatar">
                    <img src="" alt=""/>
                </div>
                <h3 className='text-center'>Jason</h3>
                <p>You have donated <b>1,000</b> grains of rice.</p>
                <p>You have answered <b>100</b> questions correctly.</p>
                <p>Your best streak was <b>52 correct answers in a row.</b></p>
                <p>Your best subject is Computer Science.</p>
                <div className="buttons">
                    <button
                        className='orange'
                        onClick={() => navigate('/user/profile/edit')}>
                        Edit profile
                    </button>
                    <button
                        className='orange'
                        onClick={() => navigate('/game')}>
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
