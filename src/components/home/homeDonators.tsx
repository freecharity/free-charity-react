import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeDonators() {
    return (
        <div className="home-donators_container">
            <div className="home-donators_inner">
                <h1>Donators</h1>
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
                <Link to={'/donate'}>Donate Now</Link>
            </div>
        </div>
    )
}