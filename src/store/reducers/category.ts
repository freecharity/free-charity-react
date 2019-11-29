const initialState = {
    name: 'programming'
};

const category = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {name: action.name};
        default:
            return state;
    }
};

export default category;
