const initialState = {
    open: false,
    selectedAvatar: ''
};

const avatar = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_SELECT_AVATAR':
            return {open: true, selectedAvatar: state.selectedAvatar};
        case 'CLOSE_SELECT_AVATAR':
            return {open: false, selectedAvatar: state.selectedAvatar};
        case 'RESET_SELECT_AVATAR':
            return {open: false, selectedAvatar: undefined};
        case 'SELECT_AVATAR':
            return {open: false, selectedAvatar: action.selectedAvatar};
        default:
            return state;
    }
};

export default avatar;
