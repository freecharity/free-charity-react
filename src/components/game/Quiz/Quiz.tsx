import React, { useEffect, useState } from 'react';

import jsonFile from './../../../data/questions.json';

import Question from './Question';

import './Quiz.scss';

interface Quiz {
  question: Question[];
}

interface Question {
  id: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  difficulty: string;
}

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>(jsonFile.questions);
  const [question, setQuestion] = useState<Question | undefined>(undefined);

  useEffect(() => {
    if (questions.length > 0) {
      setQuestion(questions[0]);
    }
  }, []);

  const handleNextQuestion = () => {
    const array = questions.slice(1);
    array.push(questions[0]);
    setQuestions(array);
    setQuestion(array[0]);
  };

  return (
    <div className="quiz_container">
      <div className="quiz_inner">
        {question == undefined ? (
          'Loading question...'
        ) : (
          <Question
            question={question}
            selectNextQuestion={handleNextQuestion}
          />
        )}
      </div>
    </div>
  );
}
