import {combineReducers} from 'redux';
import auth from './authReducer';
import selectAvatar from './selectAvatarReducer';
import sidebar from './sidebar';
import donate from './donate';
import avatar from './avatar';
import category from './category';
import deleteAnswers from './answers';

const app = combineReducers({
    auth,
    selectAvatar,
    sidebar,
    donate,
    avatar,
    category,
    deleteAnswers
});

export default app;
