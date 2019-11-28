import React, {useEffect, useState} from 'react';
import HomeLeaderboard from './homeLeaderboard';
import HomeDonators from './homeDonators';
import HomeAbout from './homeAbout';
import axios from 'axios';

export default function Home() {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [donations, setDonations] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        getCorrectAnswers();
        getUserCount();
    }, []);

    const getCorrectAnswers = () => {
        axios.get('http://localhost:3000/answers?page=1&deleted=0&correct=0').then((response) => {
            const total = response.data.total;
            if (total != undefined) {
                setCorrectAnswers(total);
            }
        });
    };

    const getUserCount = () => {
        axios.get('http://localhost:3000/users/count').then((response) => {
            const count = response.data.count;
            if (count != undefined) {
                setUserCount(count);
            }
        });
    };

    return (
        <div className="home_container">
            <div className="home_inner">
                <div className="leaderboard">
                    <HomeLeaderboard/>
                </div>
                <div className="donators">
                    <HomeDonators/>
                </div>
                <div className="grains">
                    <h1>{correctAnswers * 10}</h1>
                    <p>grains of rice donated</p>
                </div>
                <div className="bowls">
                    <h1>{Math.floor((correctAnswers * 10) / 1000)}</h1>
                    <p>bowls filled with rice</p>
                </div>
                <div className="meals">
                    <h1>{Math.floor(((correctAnswers * 10) / 1000) / 2)}</h1>
                    <p>meals fed to children</p>
                </div>
                <div className="questions">
                    <h1>{(correctAnswers)}</h1>
                    <p>questions answered</p>
                </div>
                <div className="donated">
                    <h1>${donations}</h1>
                    <p>donated by FreeCharity</p>
                </div>
                <div className="users">
                    <h1>{userCount}</h1>
                    <p>users signed up</p>
                </div>
                <div className="about">
                    <HomeAbout/>
                </div>
            </div>
        </div>
    )
}
