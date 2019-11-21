const initialState = {
    closed: true
};

const sidebar = (state = initialState, action) => {
    switch (action.type) {
        case 'CLOSE_SIDEBAR':
            return {closed: true};
        case 'OPEN_SIDEBAR':
            return {closed: false};
        default:
            return state;
    }
};

export default sidebar;
