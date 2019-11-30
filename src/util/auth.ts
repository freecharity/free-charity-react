import {User} from '../models/user';
import {AxiosError} from 'axios';
import {Login, Message} from '../models/auth';
import {login, logout, register, validate} from '../api/auth';

export const loginUser = (username: string, password: string): Promise<Login> => {
    return new Promise<Login>((resolve, reject) => {
        login(username, password).then((login: Login) => {
            resolve(login);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};

export const registerUser = (username: string, password: string, email: string): Promise<Login> => {
    return new Promise<Login>((resolve, reject) => {
        register(username, password, email).then((user: User) => {
            login(user.username, user.password).then((login: Login) => {
                resolve(login);
            }).catch((error: AxiosError) => {
                reject(error);
            });
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};

export const validateSession = (): Promise<Login> => {
    return new Promise<Login>((resolve, reject) => {
        const userSession = localStorage.getItem('userSession');
        if (userSession != null) {
            const {username, sessionId} = JSON.parse(userSession);
            validate(username, sessionId).then((user: User) => {
                resolve({
                    user: user,
                    sessionId: sessionId
                } as Login);
            }).catch((error: AxiosError) => {
                reject(error);
            });
        } else {
            reject({message: 'userSession not saved in localstorage'});
        }
    });
};

export const logoutUser = (user: User): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        logout(user).then((message: Message) => {
            resolve(message);
        }).catch((error) => {
            reject(error);
        });
    });
};
