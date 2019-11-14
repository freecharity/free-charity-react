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
import Leaderboard from 'components/leaderboard/leaderboard';
import ListCategories from "../components/categories/listCategories";
import CreateCategory from "../components/categories/createCategory";
import EditCategory from "../components/categories/editCategory";
import DeleteCategory from "../components/categories/deleteCategory";
import SelectAvatar from "../components/categories/selectAvatar";
import Home from "../components/home/home";
import Donate from "../components/donate/donate";
import SelectCategory from "../components/categories/selectCategory";
import UserProfile from "../components/User/userProfile";
import UserProfileEdit from "../components/User/userProfileEdit";
import DonationSuccessful from "../components/donate/donationResult";

export default function Site() {
    const [sidebarClosed, setSidebarClosed] = useState(true);
    const [selectAvatarClosed, setSelectAvatarClosed] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(-1);
    const [category, setCategory] = useState("data structures");
    const [donationResult, setDonationResult] = useState({
        open: false,
        successful: false
    });

    const handleToggleSidebar = () => {
        setSidebarClosed(!sidebarClosed);
    };

    const handleToggleAvatar = () => {
        setSelectAvatarClosed(!selectAvatarClosed);
    };

    const handleDonation = (open: boolean, successful: boolean) => {
        setDonationResult({open: open, successful: successful});
        console.log(donationResult);
    };

    const handleSelectedAvatar = (id: number) => {
        console.log('selected avatar: ' + id);
        setSelectedAvatar(id);
        handleToggleAvatar();
    };

    const handleSelectCategory = (category: string) => {
        console.log('selected category: ' + category);
        setCategory(category);
    };

    return (
        <div className="site">
            {selectAvatarClosed ? "" : <div className="app-select_avatar">
                <SelectAvatar toggleAvatar={handleToggleAvatar} selectAvatar={handleSelectedAvatar}/>
            </div>}
            {!donationResult.open ? "" : <div className='app-donation'>
                <DonationSuccessful toggleDonation={handleDonation} successful={donationResult.successful}/>
            </div>}
            <div className="app-sidebar">
                <Sidebar closed={sidebarClosed} toggleSidebar={handleToggleSidebar}/>
            </div>
            <div className="app-navbar">
                <Navbar toggleSidebar={handleToggleSidebar}/>
            </div>
            <div className="app-content">
                <div className="app-container">
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/game" component={Game}/>
                        <Route path="/donate"
                               component={() => <Donate toggleDonation={handleDonation}/>}
                        />
                        <Route path="/category"
                               component={() => <SelectCategory selectCategory={handleSelectCategory}/>}
                        />
                        <Route path="/leaderboard" component={Leaderboard}/>
                        <Route path="/user/profile/edit"
                               component={() => <UserProfileEdit toggleAvatar={handleToggleAvatar}
                                                                 selectedAvatar={selectedAvatar}
                                                                 selectAvatar={handleSelectedAvatar}
                               />}
                        />
                        <Route path="/user/profile" component={UserProfile}/>
                        <Route path="/user/login" component={Login}/>
                        <Route path="/user/register" component={Register}/>
                        <Route path="/questions/create" component={CreateQuestion}/>
                        <Route path="/questions/edit" component={EditQuestion}/>
                        <Route path="/questions/delete" component={DeleteQuestion}/>
                        <Route path="/questions" component={ListQuestions}/>
                        <Route path="/categories/create"
                               component={() => <CreateCategory toggleAvatar={handleToggleAvatar}
                                                                selectedAvatar={selectedAvatar}
                                                                selectAvatar={handleSelectedAvatar}
                               />}
                        />
                        <Route path="/categories/edit"
                               component={() => <EditCategory toggleAvatar={handleToggleAvatar}
                                                              selectedAvatar={selectedAvatar}
                                                              selectAvatar={handleSelectedAvatar}
                               />}
                        />
                        <Route path="/categories/delete" component={DeleteCategory}/>
                        <Route path="/categories" component={ListCategories}/>
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
