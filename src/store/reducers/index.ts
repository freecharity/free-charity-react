import {combineReducers} from 'redux';
import sidebar from './sidebar';
import donate from './donate';
import avatar from './avatar';

const app = combineReducers({
    sidebar,
    donate,
    avatar
});

export default app;
