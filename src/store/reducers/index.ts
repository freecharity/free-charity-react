import {combineReducers} from 'redux';
import sidebar from './sidebar';
import donate from './donate';
import avatar from './avatar';
import deleteAnswers from './answers';

const app = combineReducers({
    sidebar,
    donate,
    avatar,
    deleteAnswers
});

export default app;
