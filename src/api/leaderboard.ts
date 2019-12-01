import {Leaderboard} from '../models/leaderboard';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {baseUrl} from './__api';

export const getLeaderboard = (count: number): Promise<Leaderboard> => {
    return new Promise<Leaderboard>((resolve, reject) => {
        axios.get(baseUrl + `/leaderboard?count=${count}`).then((response: AxiosResponse) => {
            const leaderboard: Leaderboard = response.data;
            resolve(leaderboard);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};
