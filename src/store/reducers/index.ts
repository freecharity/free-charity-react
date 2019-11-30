import {combineReducers} from 'redux';
import sidebar from './sidebar';
import donate from './donate';
import avatar from './avatar';
import category from './category';
import deleteAnswers from './answers';
import auth from './authReducer';

const app = combineReducers({
    sidebar,
    donate,
    avatar,
    category,
    deleteAnswers,
    auth
});

export default app;
