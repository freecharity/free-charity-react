import React, {useEffect, useState} from 'react';
import {Question} from 'models/question';
import QuizAnswers from './quizAnswers';
import {shuffleArray, sleep} from 'util/common';

interface CurrentQuestionProps {
    questions: Question[];
    submitAnswer: any;
    loading: boolean;
    setLoading: any;
}

export default function QuizQuestion(props: CurrentQuestionProps) {
    const [questions, setQuestions] = useState<Question[]>(props.questions);
    const [answers, setAnswers] = useState<string[]>([]);
    const [correct, setCorrect] = useState<string>('');
    const [locked, setLocked] = useState<boolean>(false);

    useEffect(() => {
        if (questions.length > 0) {
            loadQuestion();
        }
    }, [questions]);

    const loadQuestion = () => {
        // load the correct quizAnswer
        setCorrect(questions[0].answer);
        // load and shuffle the answers
        setAnswers(shuffleArray(compileAnswers(questions[0])));
        // allow the user to select a question
        setLocked(false);
    };

    const postAnswer = async (selectedAnswer: string) => {
        props.submitAnswer(questions[0], selectedAnswer);
        await sleep(1000);
        selectNextQuestion();
    };

    const selectNextQuestion = () => {
        const arr: Question[] = questions.slice(1);
        arr.push(questions[0]);
        setQuestions(arr);
        setLocked(false);
    };

    const compileAnswers = (question: Question) => {
        return [question.answer, question.incorrect_1, question.incorrect_2, question.incorrect_3];
    };

    return (
        <div className="current-question_container">
            <div className="current-question_inner">
                {questions[0] != undefined ? <div className="question-answer">
                    <div className="question">
                        <h2 className={`text-center animated ${props.loading ? 'fadeOut' : 'fadeIn'}`}>
                            {questions[0].question}
                        </h2>
                    </div>
                    <div className="answers">
                        <QuizAnswers answers={answers}
                                     loading={props.loading}
                                     setLoading={props.setLoading}
                                     locked={locked}
                                     setLocked={setLocked}
                                     correctAnswer={correct}
                                     postAnswer={postAnswer}
                        />
                    </div>
                </div> : 'Loading question...'}
            </div>
        </div>
    );
}
