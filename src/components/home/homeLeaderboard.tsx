import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeLeaderboard() {
    return (
        <div className="home-leaderboard_container">
            <div className="home-leaderboard_inner">
                <h1>Leaderboard</h1>
                <div className="players">
                    <div className="player-2">
                        <div className="avatar">
                            <img src="" alt=""/>
                        </div>
                        <div className="place">2</div>
                        <div className="username">Green Lepracaun627</div>
                        <div className="score">10,203,412</div>
                    </div>
                    <div className="player-1">
                        <div className="avatar">
                            <img src="" alt=""/>
                        </div>
                        <div className="place">1</div>
                        <div className="username">Green Lepracaun627</div>
                        <div className="score">10,203,412</div>
                    </div>
                    <div className="player-2">
                        <div className="avatar">
                            <img src="" alt=""/>
                        </div>
                        <div className="place">3</div>
                        <div className="username">Green Lepracaun627</div>
                        <div className="score">10,203,412</div>
                    </div>
                </div>
                <Link to={'/leaderboard'}>View Leaderboard</Link>
            </div>
        </div>
    )
}