export interface User {
    user_id: number;
    username: string;
    email: string;
    password: string;
    deleted: string;
    avatar: string;
    date_registered: string;
}

export const initialState: User = {
    user_id: -1,
    username: '',
    email: '',
    password: '',
    deleted: '',
    avatar: '',
    date_registered: ''
};
