import React from 'react';
import {Link} from 'react-router-dom';

const avatar = require('assets/img/avatars/boy.svg');

const players = ['Jason', 'Peter', 'Dan', 'David', 'Filipe'];

export default function Leaderboard() {
  return (
    <div className="leaderboard_container">
      <div className="leaderboard_inner">
          <h1 className='text-center'>Leaderboard</h1>
          <h3 className='text-center'>Top Rice Earners</h3>
          <div className="players">
              {players.map((p, i) => {
                  return <div className="player" key={i}>
                      <div className="rank">
                          {i + 1}
                      </div>
                      <div className="avatar">
                          <img src="" alt=""/>
                      </div>
                      <div className="details">
                          <div className="username">
                              {p}
                          </div>
                          <div className="score">
                              15,089,460
                          </div>
                      </div>
                  </div>
              })}
          </div>
          <Link to='/game'>
              Back to game
          </Link>
      </div>
    </div>
  );
}
