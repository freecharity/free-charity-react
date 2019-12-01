import React, {useEffect, useState} from 'react';
import HomeLeaderboard from './homeLeaderboard';
import HomeDonations from './homeDonations';
import HomeAbout from './homeAbout';
import {getCorrectAnswersCount, getDonations, getLeaderboard, getTotalDonated, getUserCount} from '../../api/home';
import {Leaderboard} from '../../models/leaderboard';
import {Donation} from '../../models/donation';

export default function Home() {
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [leaderboard, setLeaderboard] = useState<Leaderboard | undefined>(undefined);
    const [donations, setDonations] = useState<Donation[] | undefined>(undefined);
    const [totalDonated, setTotalDonated] = useState<number>(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        getCorrectAnswersCount(true).then((count) => {
            setCorrectAnswerCount(count);
        });
        getUserCount().then((count) => {
            setUserCount(count);
        });
        getLeaderboard().then((leaderboard) => {
            setLeaderboard(leaderboard);
        });
        getDonations().then((donations: Donation[]) => {
            setDonations(donations);
        });
        getTotalDonated().then((total: number) => {
            setTotalDonated(total);
        });
    }, []);

    return (
        <div className="home_container">
            <div className="home_inner animated zoomIn">
                <div className="leaderboard">
                    <HomeLeaderboard leaderboard={leaderboard}/>
                </div>
                <div className="donators">
                    <HomeDonations donations={donations}/>
                </div>
                <div className="grains">
                    <h1>{correctAnswerCount * 10}</h1>
                    <p>grains of rice donated</p>
                </div>
                <div className="bowls">
                    <h1>{Math.floor((correctAnswerCount * 10) / 1000)}</h1>
                    <p>bowls filled with rice</p>
                </div>
                <div className="meals">
                    <h1>{Math.floor(((correctAnswerCount * 10) / 1000) / 2)}</h1>
                    <p>meals fed to children</p>
                </div>
                <div className="questions">
                    <h1>{(correctAnswerCount)}</h1>
                    <p>questions answered</p>
                </div>
                <div className="donated">
                    <h1>${totalDonated}</h1>
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
    );
}
