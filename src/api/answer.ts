import {baseUrl} from './__api';
import axios, {AxiosError, AxiosResponse} from 'axios';

export const getAnswerCountByUsername = (correct: boolean, username: string) => {
    return new Promise<number>((resolve, reject) => {
        const endpoint = `/answers/count/username?correct=${correct ? 1 : 0}&username=${username}`;
        axios.get(baseUrl + endpoint).then((response: AxiosResponse) => {
            const count: number = response.data.answerCount;
            resolve(count);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};
