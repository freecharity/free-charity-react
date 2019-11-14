import React, { useState, useEffect } from 'react';

import Answer from './Answer';

import './Question.scss';

interface Question {
  id: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  difficulty: string;
}

interface QuestionProps {
  question: Question;
  selectNextQuestion: any;
}

export default function Question(props: QuestionProps) {
  // prevents the user from clicking questions after answering a question
  const [locked, setLocked] = useState(false);
  // holds our shuffled answers
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    reloadQuestion();
  }, []);

  const reloadQuestion = () => {
    const answers = shuffleAnswers(assembleAnswers());
    setAnswers(answers);
  };

  const checkAnswer = (answer: string): boolean => {
    return answer == props.question.correctAnswer;
  };

  const handleLocked = (locked) => {
    setLocked(locked);
  };

  const handleNext = () => {
    props.selectNextQuestion();
    reloadQuestion();
    setLocked(false);
  };

  const assembleAnswers = () => {
    let a: Array<string> = [];
    a.push(props.question.correctAnswer);
    props.question.incorrectAnswers.forEach((i) => {
      a.push(i);
    });
    return a;
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

  return (
    <div className="question_container">
      <div className="question_inner">
        <div className="question">
          <p>{props.question.question}</p>
        </div>
        <div className="answers">
          {answers.map((a, i) => {
            return (
              <Answer
                key={i}
                answer={a}
                correct={checkAnswer(a)}
                locked={locked}
                onNext={handleNext}
                onLocked={handleLocked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
