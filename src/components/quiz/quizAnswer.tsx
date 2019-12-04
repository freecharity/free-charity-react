import React, {useEffect, useState} from 'react';
import {sleep} from '../../util/common';

interface QuizAnswer {
    answer: string;
    locked: boolean;
    loading: boolean;
    selected: boolean;
    selectAnswer: any;
    correctAnswer: any;
}

export default function quizAnswer(props: QuizAnswer) {
    const [highlighted, setHighlighted] = useState(false);
    const [correct, setCorrect] = useState(false);

    useEffect(() => {
        if (props.correctAnswer(props.answer)) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }, [props.answer]);

    const highlightAnswer = async () => {
        setHighlighted(true);
        await sleep(1250);
        setHighlighted(false);
    };

    const clickAnswer = async () => {
        if (!props.locked) {
            props.selectAnswer(props.answer);
            await highlightAnswer();
        }
    };

    return <div className="quiz-answer_container">
        <div className={`quiz-answer_inner answer animated ${props.loading ? 'slideOutRight' : 'slideInLeft'}
                         ${!highlighted ? '' : correct ? 'green' : 'red'}
                         ${props.selected && correct ? 'green' : ''}`}
             onClick={clickAnswer}>
            {props.answer}
        </div>
    </div>;
}
