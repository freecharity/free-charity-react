import {baseUrl} from './__api';
import {Category} from '../models/category';
import axios, {AxiosError, AxiosResponse} from 'axios';

export const getCategories = (page: number, category?: string, categoryId?: number): Promise<Category[]> => {
    return new Promise<Category[]>((resolve, reject) => {
        const endpoint = '/categories/';
        axios.get(baseUrl + endpoint).then((response: AxiosResponse) => {
            const categories: Category[] = response.data;
            resolve(categories);
        }).catch((error: AxiosError) => {
            reject(error);
        });
    });
};
