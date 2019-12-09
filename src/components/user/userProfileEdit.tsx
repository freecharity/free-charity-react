import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {openSelectAvatar} from 'store/actions/selectAvatarActions';
import UserProfile from 'components/user/userProfileInterface';
import {getAvatar} from '../../util/avatars';
import {User} from '../../models/user';
import {putUser} from '../../api/user';
import {AxiosError} from 'axios';
import {updateUser} from "../../store/actions/authActions";

export default function UserProfileEdit() {
    const history = useHistory();
    const dispatch = useDispatch();
    const selectedAvatar = useSelector(state => state.selectAvatar.selectedAvatar);
    const user: User = useSelector(state => state.auth.user);

    const [userProfile, setUserProfile] = useState<UserProfile>({
        id: user.user_id.toString(),
        username: user.username,
        email: user.email,
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
        if (userProfile.password === userProfile.confirmPassword) {
            const u: User = Object.assign({}, user);
            u.avatar = selectedAvatar;
            u.username = userProfile.username;
            u.email = userProfile.email;
            u.password = userProfile.password;
            putUser(u).then((user: User) => {
                dispatch(updateUser(user));
                history.push('/user/profile');
            }).catch((error: AxiosError) => {
                alert('An error occurred when updating profile!');
            });
        } else {
            alert('Passwords do not match!');
        }
    };

    return (
        <div className="user-profile-edit_container">
            <div className="user-profile-edit_inner animated fadeIn">
                <div className="avatar" onClick={() => dispatch(openSelectAvatar())}>
                    <img src={getAvatar(selectedAvatar)} alt=""/>
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
