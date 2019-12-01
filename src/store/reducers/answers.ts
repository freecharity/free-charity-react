const initialState = {
    open: false,
    answers: [],
    updated: true
};

const deleteAnswers = (state, action) => {
    switch (action.type) {
        case 'OPEN_DELETE_ANSWERS':
            console.log(action);
            return {...action, open: true, updated: false};
        case 'CLOSE_DELETE_ANSWERS':
            console.log(action);
            return {...action, open: false, updated: false, answers: []};
        case 'SET_UPDATED':
            return {...action, answers: [], updated: action.updated};
        default:
            return initialState;
    }
};

export default deleteAnswers;
