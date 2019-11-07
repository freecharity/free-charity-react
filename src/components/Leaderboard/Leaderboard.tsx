import React from 'react';
import { Link } from 'react-router-dom';

import './Leaderboard.scss';

const avatar = require('assets/img/avatars/boy.svg');

const players = ['Jason', 'Peter', 'Dan', 'David', 'Filipe'];

export default function Leaderboard() {
  return (
    <div className="leaderboard_container">
      <div className="leaderboard_inner">
        <h1>Leaderboard</h1>
        <h3>Top Rice Earnings</h3>
        <div className="players">
          {players.map((p, i) => {
            return (
              <div className="player">
                <div className="player-rank">
                  <p className="rank">{i}.</p>
                </div>
                <div className="player-icon">
                  <img src={avatar} alt="" />
                </div>
                <div className="player-details">
                  <p className="name">{p}</p>
                  <p className="score">{10000 - i * 1234}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="back-to-game">
          <Link to={'/game'}>Back to game</Link>
        </div>
      </div>
    </div>
  );
}
