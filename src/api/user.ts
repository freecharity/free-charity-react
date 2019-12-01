import axios, {AxiosError, AxiosResponse} from 'axios';
import {baseUrl} from './__api';
import {User} from '../models/user';

export const getUserByUsername = (username: string): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
        axios.get(baseUrl + `/users?username=${username}`).then((response: AxiosResponse) => {
            const user: User = response.data.results[0];
            resolve(user);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};

export const putUser = (user: User): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
        axios.put(baseUrl + `/users/`, user).then((response: AxiosResponse) => {
            resolve(user);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};
