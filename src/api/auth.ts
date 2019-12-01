import {baseUrl} from './__api';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {Login, Message} from '../models/auth';
import {User} from '../models/user';

export const login = (username: string, password: string): Promise<Login> => {
    return new Promise<Login>((resolve, reject) => {
        axios.post(baseUrl + '/auth/login/', {
            username: username,
            password: password
        }).then((response: AxiosResponse) => {
            resolve({user: response.data.user, sessionId: response.data.sessionId});
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};

export const register = (username: string, password: string, email: string): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
        console.log({
            username: username,
            password: password,
            email: email
        });
        axios.post(baseUrl + '/auth/register/', {
            username: username,
            password: password,
            email: email
        }).then((response: AxiosResponse) => {
            resolve(response.data);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};

export const validate = (username: string, sessionId: string): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
        axios.post(baseUrl + '/auth/validate/', {
            username: username,
            sessionId: sessionId
        }).then((response: AxiosResponse) => {
            resolve(response.data);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};

export const logout = (user: User): Promise<Message> => {
    return new Promise<Message>((resolve, reject) => {
        axios.post(baseUrl + '/auth/logout/', user).then((response: AxiosResponse) => {
            resolve({message: response.data});
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};
