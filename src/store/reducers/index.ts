import {combineReducers} from 'redux';
import sidebar from './sidebar';
import donate from './donate';

const app = combineReducers({
    sidebar,
    donate
});

export default app;
