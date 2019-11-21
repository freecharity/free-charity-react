export interface Category {
    category_id: number;
    name: string;
    group: string;
    description: string;
    image: string;
    deleted: number;
}

export const initialState = {
    category_id: -1,
    name: '',
    group: '',
    description: '',
    deleted: 0,
    image: ''
};
