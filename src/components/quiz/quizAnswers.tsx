import React from 'react';
import {sleep} from 'util/common';
import Answer from './quizAnswer';

interface QuizAnswersProps {
    answers: string[];
    loading: boolean;
    setLoading: any;
    locked: boolean;
    setLocked: any;
    correctAnswer: string;
    postAnswer: any;
}

export default function QuizAnswers(props: QuizAnswersProps) {

    const selectAnswer = async (answer: string) => {
        if (!props.locked) {
            props.setLocked(true);
            await sleep(1000);
            props.postAnswer(answer);
            await loadAnswers();
        }
    };

    const loadAnswers = async () => {
        props.setLoading(true);
        await sleep(1000);
        props.setLoading(false);
        await sleep(1250);
        props.setLocked(false);
    };

    const correctAnswer = (answer: string) => {
        return (answer === props.correctAnswer);
    };

    return <div className="quiz-answers_container">
        <div className="quiz-answers_inner">
            {props.answers.map((a, i) => {
                return <Answer
                    key={i}
                    answer={a}
                    locked={props.locked}
                    loading={props.loading}
                    selectAnswer={selectAnswer}
                    correctAnswer={correctAnswer}
                />;
            })}
        </div>
    </div>;
};
