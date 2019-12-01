import axios, {AxiosError, AxiosResponse} from 'axios';
import {endpoint} from './__api';
import {Leaderboard} from '../models/leaderboard';
import {Donation} from '../models/donation';

export const getCorrectAnswersCount = (correctOnly: boolean): Promise<number> => {
    const correct: number = correctOnly ? 1 : 0;
    return new Promise<number>((resolve, reject) => {
        axios.get(endpoint + `/answers/count?correct=${correct}`).then((response: AxiosResponse) => {
            const count = response.data.answerCount;
            resolve(count);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};

export const getUserCount = (): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
        axios.get(endpoint + '/users/count').then((response: AxiosResponse) => {
            const count = response.data.userCount;
            resolve(count);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};

export const getTotalDonated = (): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
        axios.get(endpoint + '/donation/total').then((response: AxiosResponse) => {
            const total = response.data.totalDonated;
            resolve(total);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};

export const getDonations = (): Promise<Donation[]> => {
    return new Promise<Donation[]>((resolve, reject) => {
        const count: number = 3;
        axios.get(endpoint + `/donation?count=${count}`).then((response: AxiosResponse) => {
            const donations: Donation[] = response.data;
            resolve(donations);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};

export const getLeaderboard = (): Promise<Leaderboard> => {
    return new Promise<Leaderboard>((resolve, reject) => {
        const count: number = 3;
        axios.get(endpoint + `/leaderboard?count=${count}`).then((response: AxiosResponse) => {
            const leaderboard: Leaderboard = response.data;
            resolve(leaderboard);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};
