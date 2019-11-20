import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import Sidebar from 'components/sidebar/sidebar';
import Navbar from 'components/navbar/navbar';
import Footer from 'components/footer/footer';
import Game from 'components/game/Game';
import UserLogin from 'components/user/userLogin';
import Register from 'components/user/userRegister';
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
import UserProfile from "../components/user/userProfile";
import UserProfileEdit from "../components/user/userProfileEdit";
import DonationSuccessful from "../components/donate/donationResult";
import ListAnswers from "../components/answers/listAnswers";
import Answer from "../components/answers/answerInterface";
import DeleteAnswers from "../components/answers/deleteAnswers";

export default function Site() {
    const [sidebarClosed, setSidebarClosed] = useState(true);
    const [selectAvatar, setSelectAvatar] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(-1);
    const [category, setCategory] = useState("data structures");
    const [donationResult, setDonationResult] = useState({
        open: false,
        successful: false
    });

    // TODO replace <any> with something typesafe
    const [deleteAnswers, setDeleteAnswers] = useState<any>({
        open: false,
        answers: []
    });

    const handleToggleSidebar = () => {
        setSidebarClosed(!sidebarClosed);
    };

    const handleToggleAvatar = () => {
        setSelectAvatar(!selectAvatar);
    };

    const handleDonation = (open: boolean, successful: boolean) => {
        setDonationResult({open: open, successful: successful});
    };

    const handleDeleteAnswers = (open: boolean, answers: Answer[]) => {
        setDeleteAnswers({open: open, answers: answers});
    };

    const handleSelectedAvatar = (id: number) => {
        setSelectedAvatar(id);
        handleToggleAvatar();
    };

    const handleSelectCategory = (category: string) => {
        setCategory(category);
    };

    return (
        <div className="site">
            {selectAvatar ?
                ""
                :
                <SelectAvatar toggleAvatar={handleToggleAvatar} selectAvatar={handleSelectedAvatar}/>
            }
            {donationResult.open ?
                <DonationSuccessful toggleDonation={handleDonation} successful={donationResult.successful}/>
                :
                ""
            }
            {deleteAnswers.open ?
                <DeleteAnswers toggleDeleteAnswers={handleDeleteAnswers} answers={deleteAnswers.answers}/>
                :
                ""
            }
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
                        <Route path="/user/login" component={UserLogin}/>
                        <Route path="/user/register" component={Register}/>
                        <Route path="/questions/create" component={CreateQuestion}/>
                        <Route path="/questions/edit/:questionId" component={EditQuestion}/>
                        <Route path="/questions/delete/:questionId" component={DeleteQuestion}/>
                        <Route path="/questions" component={ListQuestions}/>
                        <Route path="/categories/create"
                               component={() => <CreateCategory toggleAvatar={handleToggleAvatar}
                                                                selectedAvatar={selectedAvatar}
                                                                selectAvatar={handleSelectedAvatar}
                               />}
                        />
                        <Route path="/categories/edit/:categoryId"
                               component={() => <EditCategory toggleAvatar={handleToggleAvatar}
                                                              selectedAvatar={selectedAvatar}
                                                              selectAvatar={handleSelectedAvatar}
                               />}
                        />
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
