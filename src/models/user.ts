export interface User {
    user_id: number;
    username: string;
    email: string;
    password: string;
    confirmPassword?: string;
    deleted: string;
    avatar: string;
    administrator: number;
    date_registered: string;
}

export const initialState: User = {
    user_id: -1,
    username: '',
    email: '',
    password: '',
    deleted: '',
    avatar: '',
    administrator: 0,
    date_registered: ''
};
