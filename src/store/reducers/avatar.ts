const initialState = {
    closed: true
};

const avatar = (state = initialState, action) => {
    switch (action.type) {
        case 'CLOSE_SELECT_AVATAR':
            return {closed: true};
        case 'OPEN_SELECT_AVATAR':
            return {closed: false};
        default:
            return state;
    }
};

export default avatar;
