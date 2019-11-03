import React from 'react';

import './Quiz.scss';

export default function Quiz() {
  return (
    <div className="quiz_container">
      <div className="quiz_inner">
        <div className="quiz_question">
          <p>
            What is the data type of the following variable: "Hello World!"?
          </p>
        </div>
        <div className="quiz_answers">
          <div className="quiz_answer">
            <p>integer</p>
          </div>
          <div className="quiz_answer">
            <p>string</p>
          </div>
          <div className="quiz_answer">
            <p>character</p>
          </div>
          <div className="quiz_answer">
            <p>long</p>
          </div>
        </div>
      </div>
    </div>
  );
}
