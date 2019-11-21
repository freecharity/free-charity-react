const initialState = {
    closed: true,
    success: false
};

const donate = (state = initialState, action) => {
    switch (action.type) {
        case 'CLOSE_DONATION':
            return {...state, closed: false};
        case 'OPEN_DONATION':
            return {...state, closed: true};
        default:
            return state;
    }
};

export default donate;
