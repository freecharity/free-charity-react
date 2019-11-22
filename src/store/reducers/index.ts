import {combineReducers} from 'redux';
import auth from './auth';
import sidebar from './sidebar';
import donate from './donate';
import avatar from './avatar';
import category from './category';
import deleteAnswers from './answers';

const app = combineReducers({
    auth,
    sidebar,
    donate,
    avatar,
    category,
    deleteAnswers
});

export default app;
