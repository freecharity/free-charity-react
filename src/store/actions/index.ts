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
