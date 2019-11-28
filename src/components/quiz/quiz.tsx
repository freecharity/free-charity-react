import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
import QuizQuestion from './quizQuestion';
import QuizScore from './quizScore';
import {Question} from 'models/question';
import {Answer} from 'models/answer';

export default function Quiz() {
    const category = useSelector(state => state.category.name);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [score, setScore] = useState<number>(0);
    const endpoint = `http://localhost:3000`;
    const [username, setUsername] = useState<string>('');

    useEffect(() => {
        getQuiz();
        getUserSession();
    }, []);

    const getQuiz = () => {
        axios.get(endpoint + `/quiz?categoryName=${category}`).then((res) => {
            const questions: Question[] = res.data;
            setQuestions(questions);
        }).catch((err) => {
            alert(err);
        });
    };

    const postAnswer = (selectedAnswer: string, question: Question) => {
        const correct = question.answer === selectedAnswer ? 1 : 0;
        const answer = {
            answer_id: -1,
            answer: selectedAnswer,
            correct: correct,
            deleted: 0,
            ip: "unknown", // TODO: Get Users IP Address
            date_answered: new Date().toISOString(),
            question_id: question.question_id,
            user_id: -1,
            username: username !== '' ? username : 'anonymous'
        } as Answer;
        if (correct) {
            setScore(score + 1);
        }
        axios.post<Answer>(endpoint + `/answers/`, answer).then((res) => {
            // console.log(res);
        }).catch((err) => {
            // console.log(err);
        });
    };

    const getUserSession = () => {
        const session: any = sessionStorage.getItem('userSession');
        if (session != undefined) {
            setUsername(JSON.parse(session).username);
        }
    };

    return (
        <div className="quiz_container">
            <div className="quiz_inner">
                {questions != undefined && questions.length > 0
                    ?
                    <QuizQuestion questions={questions} postAnswer={postAnswer}/>
                    : ''}
                <QuizScore score={score} category={category}/>
            </div>
        </div>
    )
}
