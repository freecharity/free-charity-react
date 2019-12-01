import {Login} from '../../models/auth';
import {User} from '../../models/user';

export const saveLogin = (login: Login) => ({
    type: 'SAVE_LOGIN',
    login: login
});

export const deleteLogin = () => ({
    type: 'DELETE_LOGIN'
});

export const updateUser = (user: User) => ({
    type: 'UPDATE_USER',
    user: user
});
