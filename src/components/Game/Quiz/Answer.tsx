import React, { useState } from 'react';

import './Answer.scss';

interface AnswerProps {
  answer: string;
  correct: boolean;
  locked: boolean;
  onNext: any;
  onLocked: any;
}

export default function Answer({
  answer,
  correct,
  locked,
  onNext,
  onLocked
}: AnswerProps) {
  const [status, setStatus] = useState('ready');

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
      setTimeout(() => {
        onNext();
        setStatus('ready');
      }, 3000);
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
