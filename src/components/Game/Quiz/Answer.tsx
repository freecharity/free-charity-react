import React, { useState } from 'react';

import './Answer.scss';

interface AnswerProps {
  answer: string;
  correct: boolean;
  locked: boolean;
  onLocked: any;
}

export default function Answer({
  answer,
  correct,
  locked,
  onLocked
}: AnswerProps) {
  const [status, setStatus] = useState('Not answered');

  const checkCorrect = () => {
    if (!locked) {
      if (correct) {
        // highlight green
        setStatus('correct');
        onLocked(true);
      } else {
        // highlight red
        setStatus('incorrect');
        onLocked(true);
      }
    } else {
      console.log('Quiz is locked');
    }
  };

  return (
    <div className="answer_container">
      <div
        className={`answer_inner ${status == 'correct' ? 'correct-answer' : ''}
        ${status == 'incorrect' ? 'incorrect-answer' : ''}`}
      >
        <div className="answer" onClick={checkCorrect}>
          <p>
            {answer} {correct}
          </p>
        </div>
      </div>
    </div>
  );
}
