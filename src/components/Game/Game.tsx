import React from 'react';
import './Game.scss';

import Quiz from './Quiz/Quiz';

export default function Game() {
  return (
    <div className="game_container">
      <div className="game_inner">
        <Quiz />
      </div>
    </div>
  );
}
