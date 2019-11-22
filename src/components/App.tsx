import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';
import axios from 'axios';

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
import Footer from './footer/footer';

import {UserSession} from 'models/session';
import {loginUser, logoutUser} from 'store/actions';
import {User} from 'models/user';

import 'assets/scss/site.scss';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        validateSessionId();
    }, []);

    const validateSessionId = () => {
        const session = sessionStorage.getItem('userSession');
        if (session != undefined) {
            const userSession: UserSession = JSON.parse(session);
            if (userSession != undefined) {
                axios.post('http://localhost:3000/auth/validate', userSession).then((res) => {
                    const user: User = res.data.user;
                    dispatch(loginUser(user));
                }).catch((err) => {
                    sessionStorage.removeItem('userSession');
                    dispatch(logoutUser);
                });
            }
        }
    };

    return (<BrowserRouter>
        <div className="site">
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
                        <Route path="/user/profile/edit" component={UserProfileEdit}/>
                        <Route path="/user/profile" component={UserProfile}/>
                        <Route path="/user/login" component={UserLogin}/>
                        <Route path="/user/register" component={Register}/>
                        <Route path="/questions/create" component={CreateQuestion}/>
                        <Route path="/questions/edit/:questionId" component={EditQuestion}/>
                        <Route path="/questions/delete/:questionId" component={DeleteQuestion}/>
                        <Route path="/questions" component={ListQuestions}/>
                        <Route path="/categories/create" component={CreateCategory}/>
                        <Route path="/categories/edit/:categoryId" component={EditCategory}/>
                        <Route path="/categories/delete/:categoryId" component={DeleteCategory}/>
                        <Route path="/categories" component={ListCategories}/>
                        <Route path='/answers' component={ListAnswers}/>
                        <Route path="*" component={Home}/>
                    </Switch>
                </div>
            </div>
            <div className="app-footer">
                <Footer/>
            </div>
        </div>
    </BrowserRouter>)
};

export default hot(App);
