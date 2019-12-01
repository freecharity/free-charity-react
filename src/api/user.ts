import axios, {AxiosError, AxiosResponse} from 'axios';
import {endpoint} from './__api';
import {User} from '../models/user';

export const getUserByUsername = (username: string): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
        axios.get(endpoint + `/users?username=${username}`).then((response: AxiosResponse) => {
            const user: User = response.data.results[0];
            resolve(user);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};
