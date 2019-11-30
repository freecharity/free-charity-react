import {User} from './user';

export interface Login {
    user: User,
    sessionId: string
}

export interface Message {
    message: string;
}
