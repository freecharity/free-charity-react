import {User} from '../../models/user';

export const toggleSidebar = closed => ({
    type: closed ? 'OPEN_SIDEBAR' : 'CLOSE_SIDEBAR'
});

export const toggleDonate = (closed, success) => ({
    type: closed ? 'OPEN_DONATION' : 'CLOSE_DONATION',
    success: success
});

export const openAvatar = (open) => ({
    type: open ? 'OPEN_SELECT_AVATAR' : 'CLOSE_SELECT_AVATAR'
});

export const openDeleteAnswers = (open, answers) => ({
    type: open ? 'OPEN_DELETE_ANSWERS' : 'CLOSE_DELETE_ANSWERS',
    answers: answers
});

export const setAnswersUpdated = (updated) => ({
    type: 'SET_UPDATED',
    updated: updated
});

export const setCategory = (name) => ({
    type: 'SET_CATEGORY',
    name: name
});

export const loginUser = (user: User) => ({
    type: 'LOGIN_USER',
    user: user
});

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
});
