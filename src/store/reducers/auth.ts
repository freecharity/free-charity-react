const initialState = {
    user: undefined
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, user: action.user};
        case 'LOGOUT_USER':
            return {...state, user: undefined};
        default:
            return state;
    }
};

export default auth;
