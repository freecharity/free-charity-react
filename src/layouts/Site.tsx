import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import Sidebar from 'components/sidebar/sidebar';
import Navbar from 'components/navbar/navbar';
import Footer from 'components/footer/footer';
import Game from 'components/Game/Game';
import Login from 'components/User/Login';
import Register from 'components/User/Register';
import CreateQuestion from 'components/questions/createQuestion';
import EditQuestion from 'components/questions/editQuestion';
import DeleteQuestion from 'components/questions/deleteQuestion';
import ListQuestions from 'components/questions/listQuestions';
import Leaderboard from 'components/Leaderboard/Leaderboard';
import ListCategories from "../components/categories/listCategories";
import CreateCategory from "../components/categories/createCategory";
import EditCategory from "../components/categories/editCategory";
import DeleteCategory from "../components/categories/deleteCategory";

export interface ISiteLayout {
}

export default function Site() {
    const [sidebarClosed, setSidebarClosed] = useState(true);

    const handleToggleSidebar = () => {
        setSidebarClosed(!sidebarClosed);
    };

    return (
        <div className="site">
            <div className="app-sidebar">
                <Sidebar closed={sidebarClosed} toggleSidebar={handleToggleSidebar}/>
            </div>
            <div className="app-navbar">
                <Navbar toggleSidebar={handleToggleSidebar}/>
            </div>
            <div className="app-content">
                <Switch>
                    <Route path="/user/login" component={Login}/>
                    <Route path="/user/register" component={Register}/>
                    <Route path="/questions/create" component={CreateQuestion}/>
                    <Route path="/questions/edit" component={EditQuestion}/>
                    <Route path="/questions/delete" component={DeleteQuestion}/>
                    <Route path="/questions" component={ListQuestions}/>
                    <Route path="/categories/create" component={CreateCategory}/>
                    <Route path="/categories/edit" component={EditCategory}/>
                    <Route path="/categories/delete" component={DeleteCategory}/>
                    <Route path="/categories" component={ListCategories}/>
                    <Route path="/leaderboard" component={Leaderboard}/>
                    <Route path="*" component={Game}/>
                </Switch>
            </div>
            <div className="app-footer">
                <Footer/>
            </div>
        </div>
    );
}
