import React, { useEffect, useState } from 'react';
import Answer from './Answer';
import jsonFile from './questions.json';

import './Quiz.scss';

export default function Quiz() {
  const [question, setQuestion] = useState({
    id: jsonFile.questions[0].id,
    question: jsonFile.questions[0].question,
    correctAnswer: jsonFile.questions[0].correctAnswer,
    incorrectAnswers: jsonFile.questions[0].incorrectAnswers,
    difficulty: jsonFile.questions[0].difficulty
  });
  const [answers, setAnswers] = useState([]);
  const [locked, setLocked] = useState(false);

  const handleLocked = (locked) => {
    setLocked(locked);
  };

  const loadQuestion = () => {
    setAnswers(shuffleAnswers(assembleAnswers()));
  };

  const assembleAnswers = () => {
    let answers: Array<string> = [];
    answers.push(question.correctAnswer);
    question.incorrectAnswers.forEach((i) => {
      answers.push(i);
    });
    return answers;
  };

  const shuffleAnswers = (answers) => {
    var j, x, i;
    for (i = answers.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = answers[i];
      answers[i] = answers[j];
      answers[j] = x;
    }
    return answers;
  };

  const checkAnswer = (answer: string): boolean => {
    return answer == question.correctAnswer;
  };

  useEffect(() => {
    loadQuestion();
  }, []);

  return (
    <div className="quiz_container">
      <div className="quiz_inner">
        <div className="quiz_question">
          <p>{question.question}</p>
        </div>
        <div className="quiz_answers">
          {answers.map((a) => {
            return (
              <Answer
                answer={a}
                correct={checkAnswer(a)}
                locked={locked}
                onLocked={handleLocked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
