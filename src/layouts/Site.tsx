import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import Sidebar from 'components/sidebar/sidebar';
import Navbar from 'components/navbar/navbar';
import Footer from 'components/footer/footer';
import Quiz from 'components/quiz/quiz';
import UserLogin from 'components/user/userLogin';
import Register from 'components/user/userRegister';
import CreateQuestion from 'components/questions/createQuestion';
import EditQuestion from 'components/questions/editQuestion';
import DeleteQuestion from 'components/questions/deleteQuestion';
import ListQuestions from 'components/questions/listQuestions';
import Leaderboard from 'components/leaderboard/leaderboard';
import ListCategories from '../components/categories/listCategories';
import CreateCategory from '../components/categories/createCategory';
import EditCategory from '../components/categories/editCategory';
import DeleteCategory from '../components/categories/deleteCategory';
import SelectAvatar from '../components/categories/selectAvatar';
import Home from '../components/home/home';
import Donate from '../components/donate/donate';
import SelectCategory from '../components/categories/selectCategory';
import UserProfile from '../components/user/userProfile';
import UserProfileEdit from '../components/user/userProfileEdit';
import DonationResult from '../components/donate/donationResult';
import ListAnswers from '../components/answers/listAnswers';
import DeleteAnswers from '../components/answers/deleteAnswers';
import Answer from '../components/answers/answerInterface';

export default function Site() {
    const [category, setCategory] = useState('data structures');

    // TODO replace <any> with something typesafe
    const [deleteAnswers, setDeleteAnswers] = useState<any>({
        open: false,
        answers: []
    });

    const handleDeleteAnswers = (open: boolean, answers: Answer[]) => {
        setDeleteAnswers({open: open, answers: answers});
    };

    const handleSelectCategory = (category: string) => {
        setCategory(category);
    };

    return (
        <div className="site">
            <SelectAvatar/>
            <DonationResult/>
            {deleteAnswers.open ?
                <DeleteAnswers toggleDeleteAnswers={handleDeleteAnswers} answers={deleteAnswers.answers}/>
                :
                ''
            }
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
                        />
                        <Route path="/category"
                               component={() => <SelectCategory selectCategory={handleSelectCategory}/>}
                        />
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
                        <Route path='/answers'
                               component={() => <ListAnswers toggleDeleteAnswers={handleDeleteAnswers}
                               />}
                        />
                        <Route path="*" component={Home}/>
                    </Switch>
                </div>
            </div>
            <div className="app-footer">
                <Footer/>
            </div>
        </div>
    );
}
