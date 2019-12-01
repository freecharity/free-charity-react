import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import QuizScore from './quizScore';
import QuizQuestion from './quizQuestion';
import {Question} from 'models/question';
import {getQuestions, postAnswer} from '../../api/quiz';

export default function Quiz() {
    const category = useSelector(state => state.category.name);
    const user = useSelector(state => state.auth.user);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        getQuestions('Programming').then((questions) => {
            setQuestions(questions);
        });
    }, []);

    const submitAnswer = (question: Question, selectedAnswer: string) => {
        postAnswer(question, selectedAnswer, user).then((answer) => {
            if (answer.correct === 1) {
                setScore(score + 1);
            }
        });
    };

    return (
        <div className="quiz_container">
            {questions != undefined && questions.length > 0
                ?
                <div className="quiz_inner animated zoomIn">
                    <QuizQuestion questions={questions} submitAnswer={submitAnswer}/>
                    <QuizScore score={score} category={category}/>
                </div>
                :
                <div className="quiz_inner">
                    <h1>Loading your gaming now...</h1>
                </div>}
        </div>
    );
}
