const initialState = {
    closed: true,
    success: false
};

const donateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_DONATION_RESULT':
            return {closed: false, success: action.success};
        case 'HIDE_DONATION_RESULT':
            return {closed: true, success: false};
        default:
            return state;
    }
};

export default donateReducer;
