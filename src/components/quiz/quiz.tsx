import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import QuizScore from './quizScore';
import QuizQuestion from './quizQuestion';
import {Question} from 'models/question';
import {getQuestions, postAnswer} from '../../api/quiz';
import {shuffleArray} from "../../util/common";

export default function Quiz() {
    const history = useHistory();
    const category = useSelector(state => state.category);
    const user = useSelector(state => state.auth.user);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [score, setScore] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getQuestions(category.name).then((questions) => {
            setQuestions(shuffleArray(questions));
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
                <div className={`quiz_inner animated ${loading ? 'pulse' : ''}`}>
                    <QuizQuestion questions={questions}
                                  submitAnswer={submitAnswer}
                                  loading={loading}
                                  setLoading={setLoading}/>
                    <QuizScore score={score}
                               category={category}
                               loading={loading}/>
                </div>
                :
                <div className="quiz_inner animated fadeIn">
                    Loading Quiz...
                </div>}
            <div className="quiz_inner quiz-select-category">
                <h2>Select a different category</h2>
                <button onClick={() => history.push('/category')}>Select Category</button>
            </div>
        </div>
    );
}
