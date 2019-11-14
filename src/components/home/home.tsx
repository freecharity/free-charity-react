import React from 'react';
import HomeLeaderboard from "./homeLeaderboard";
import HomeDonators from "./homeDonators";
import HomeAbout from "./homeAbout";

export default function Home() {
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
                    <h1>101,234,567</h1>
                    <p>grains of rice donated</p>
                </div>
                <div className="bowls">
                    <h1>5,342,522</h1>
                    <p>bowls filled with rice</p>
                </div>
                <div className="meals">
                    <h1>2,424,523</h1>
                    <p>meals fed to children</p>
                </div>
                <div className="questions">
                    <h1>10,412,523</h1>
                    <p>questions answered</p>
                </div>
                <div className="donated">
                    <h1>$523,532</h1>
                    <p>donated by FreeCharity</p>
                </div>
                <div className="users">
                    <h1>3</h1>
                    <p>users signed up</p>
                </div>
                <div className="about">
                    <HomeAbout/>
                </div>
            </div>
        </div>
    )
}