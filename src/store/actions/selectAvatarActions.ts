export const openSelectAvatar = () => ({
    type: 'OPEN_SELECT_AVATAR'
});

export const closeSelectAvatar = () => ({
    type: 'CLOSE_SELECT_AVATAR'
});

export const resetSelectAvatar = () => ({
    type: 'RESET_SELECT_AVATAR'
});

export const selectAvatar = (avatar: string) => ({
    type: 'SELECT_AVATAR',
    selectedAvatar: avatar
});
