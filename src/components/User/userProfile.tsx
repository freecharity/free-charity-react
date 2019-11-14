import React from 'react';
import {Link} from 'react-router-dom';

export default function UserProfile() {
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
                    <Link to={'/user/profile/edit'}>Edit profile</Link>
                    <Link to={'/game'}>Back to game</Link>
                </div>
            </div>
        </div>
    )
}