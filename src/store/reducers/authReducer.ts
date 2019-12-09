const initialState = {
    user: undefined,
    sessionId: undefined,
    userLevel: 0
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_LOGIN':
            localStorage.setItem('userSession', JSON.stringify({
                username: action.login.user.username,
                sessionId: action.login.sessionId
            }));
            const userLevel = action.login.user.administrator == 1 ? 2 : 1;
            return {user: action.login.user, sessionId: action.login.sessionId, userLevel: userLevel};
        case 'DELETE_LOGIN':
            localStorage.removeItem('userSession');
            return {user: undefined, sessionId: undefined, userLevel: 0};
        case 'UPDATE_USER':
            return {...state, user: action.user};
        default:
            return state;
    }
};

export default auth;
