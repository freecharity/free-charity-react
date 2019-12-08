import {baseUrl} from './__api';
import axios, {AxiosError, AxiosResponse} from 'axios';
import Payment from "../components/donate/models/payment";

export const postPayment = (payment: Payment): Promise<any> => {
    return new Promise((resolve, reject) => {
        const endpoint = '/donation/';
        axios.post(baseUrl + endpoint, payment).then((response: AxiosResponse) => {
            resolve(response);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};