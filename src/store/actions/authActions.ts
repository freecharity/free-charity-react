import {Login} from '../../models/auth';

export const saveLogin = (login: Login) => ({
    type: 'SAVE_LOGIN',
    login: login
});

export const deleteLogin = () => ({
    type: 'DELETE_LOGIN'
});
