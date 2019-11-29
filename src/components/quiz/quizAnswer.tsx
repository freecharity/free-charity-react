import React, {useState} from 'react';
import {sleep} from '../../util/common';

interface QuizAnswer {
    answer: string;
    locked: boolean;
    loading: boolean;
    selectAnswer: any;
    correctAnswer: any;
}

export default function quizAnswer(props: QuizAnswer) {
    const [highlighted, setHighlighted] = useState(false);
    const [correct, setCorrect] = useState(false);

    const highlightAnswer = async (answer: string) => {
        if (props.correctAnswer(answer)) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
        setHighlighted(true);
        await sleep(1250);
        setHighlighted(false);
    };

    const clickAnswer = async () => {
        if (!props.locked) {
            props.selectAnswer(props.answer);
            await highlightAnswer(props.answer);
        }
    };

    return <div className="quiz-answer_container">
        <div className={`quiz-answer_inner answer animated ${props.loading ? 'slideOutRight' : 'slideInLeft'}
                         ${!highlighted ? '' : correct ? 'green' : 'red'}`}
             onClick={clickAnswer}>
            {props.answer}
        </div>
    </div>;
}
