import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {openAvatar} from 'store/actions';
import UserProfile from 'assets/scss/components/user/userProfileInterface';
import jsonFile from 'data/userProfile_data.json';

export default function UserProfileEdit() {
    const dispatch = useDispatch();

    const [userProfile, setUserProfile] = useState<UserProfile>({
        id: jsonFile.id,
        username: jsonFile.username,
        email: jsonFile.email,
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setUserProfile({
            ...userProfile,
            [event.target.name]: event.target.value
        });
    };

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }

        // make sure password === confirmPassword
        if (userProfile.password === userProfile.confirmPassword) {
            submitUserProfileToServer();
        } else {
            alert('Passwords do not match!');
        }

    };

    const submitUserProfileToServer = () => {
        console.log('Submitting user profile to server');
        console.log(userProfile);
    };

    return (
        <div className="user-profile-edit_container">
            <div className="user-profile-edit_inner">
                <div className="avatar" onClick={() => dispatch(openAvatar(true))}>
                    <img src="" alt=""/>
                    <span>Edit</span>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group d1">
                        <label>Username</label>
                        <input id='username'
                               name='username'
                               type="text"
                               value={userProfile.username}
                               onChange={handleInputChange}
                               required={true}
                        />
                    </div>
                    <div className="input-group d2">
                        <label>Email Address</label>
                        <input id='email'
                               name='email'
                               type="text"
                               value={userProfile.email}
                               onChange={handleInputChange}
                               required={true}
                        />
                    </div>
                    <div className="input-group d3">
                        <label>Password</label>
                        <input id='password'
                               name='password'
                               type="password"
                               value={userProfile.password}
                               onChange={handleInputChange}
                               required={true}
                        />
                    </div>
                    <div className="input-group d4">
                        <label>Confirm Password</label>
                        <input id='confirmPassword'
                               name='confirmPassword'
                               type="password"
                               value={userProfile.confirmPassword}
                               onChange={handleInputChange}
                               required={true}
                        />
                    </div>
                    <div className="buttons d5">
                        <Link to='/user/profile'>Cancel</Link>
                        <button>Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
