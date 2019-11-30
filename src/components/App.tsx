import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';

import SelectAvatar from './categories/selectAvatar';
import DonationResult from './donate/donationResult';
import DeleteAnswers from './answers/deleteAnswers';
import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/navbar';
import Home from './home/home';
import Quiz from './quiz/quiz';
import Donate from './donate/donate';
import SelectCategory from './categories/selectCategory';
import Leaderboard from './leaderboard/leaderboard';
import UserProfileEdit from './user/userProfileEdit';
import UserProfile from './user/userProfile';
import UserLogin from './user/userLogin';
import Register from './user/userRegister';
import CreateQuestion from './questions/createQuestion';
import EditQuestion from './questions/editQuestion';
import DeleteQuestion from './questions/deleteQuestion';
import ListQuestions from './questions/listQuestions';
import CreateCategory from './categories/createCategory';
import EditCategory from './categories/editCategory';
import DeleteCategory from './categories/deleteCategory';
import ListCategories from './categories/listCategories';
import ListAnswers from './answers/listAnswers';

import {validateSession} from 'util/auth';
import {ProtectedRoute} from 'util/protectedRoute';

import 'assets/scss/site.scss';
import {saveLogin} from '../store/actions/authActions';
import {Login} from '../models/auth';

const App = () => {
    const dispatch = useDispatch();
    const [complete, setComplete] = useState(false);
    useEffect(() => {
        validateSession().then((login: Login) => {
            dispatch(saveLogin(login));
        }).finally(() => {
            setComplete(true);
        });
    }, []);

    return (<BrowserRouter>
        {complete ? <div className="site">
            <SelectAvatar/>
            <DonationResult/>
            <DeleteAnswers/>
            <div className="app-sidebar">
                <Sidebar/>
            </div>
            <div className="app-navbar">
                <Navbar/>
            </div>
            <div className="app-content">
                <div className="app-container">
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/game" component={Quiz}/>
                        <Route path="/donate" component={Donate}/>
                        <Route path="/category" component={SelectCategory}/>
                        <Route path="/leaderboard" component={Leaderboard}/>
                        <ProtectedRoute path="/user/profile/edit" component={UserProfileEdit} level={1}/>
                        <ProtectedRoute path="/user/profile" component={UserProfile} level={1}/>
                        <ProtectedRoute path="/user/login" component={UserLogin} level={0}/>
                        <ProtectedRoute path="/user/register" component={Register} level={0}/>
                        <ProtectedRoute path="/questions/create" component={CreateQuestion} level={2}/>
                        <ProtectedRoute path="/questions/edit/:questionId" component={EditQuestion} level={2}/>
                        <ProtectedRoute path="/questions/delete/:questionId" component={DeleteQuestion} level={2}/>
                        <ProtectedRoute path="/questions" component={ListQuestions} level={2}/>
                        <ProtectedRoute path="/categories/create" component={CreateCategory} level={2}/>
                        <ProtectedRoute path="/categories/edit/:categoryId" component={EditCategory} level={2}/>
                        <ProtectedRoute path="/categories/delete/:categoryId" component={DeleteCategory} level={2}/>
                        <ProtectedRoute path="/categories" component={ListCategories} level={2}/>
                        <ProtectedRoute path='/answers' component={ListAnswers} level={2}/>
                        <Redirect to={'/home'}/>
                    </Switch>
                </div>
            </div>
        </div> : ''}
    </BrowserRouter>);
};

export default hot(App);
