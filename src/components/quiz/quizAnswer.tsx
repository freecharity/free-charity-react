import React, {useEffect, useState} from 'react';

interface AnswerProps {
    id: number;
    answer: string;
    correct: boolean;
    locked: boolean;
    loading: boolean;
    setLocked: any;
    submitAnswer: any;
}

export default function QuizAnswer(props: AnswerProps) {
    const [loading, setLoading] = useState(props.loading);
    const [highlight, setHighlight] = useState('');

    useEffect(() => {
        setLoading(false);
    }, [props.locked, props.loading]);

    const selectAnswer = () => {
        if (!props.locked) {
            // lock other answers
            props.setLocked(true);
            // highlight green or red if answer is correct or incorrect
            if (props.correct) {
                setHighlight('green');
            } else {
                setHighlight('red');
            }
            // TODO: If incorrect, highlight correct answer
            // loadNext Question after 1s
            setTimeout(() => {
                loadNextQuestion();
            }, 1000);
        }
    };

    const loadNextQuestion = () => {
        // start slideOutRight animation
        setLoading(true);
        setTimeout(() => {
            props.submitAnswer(props.answer);
            // reset highlighted color
            setHighlight('');
            // start slideInLeft animation
            setLoading(false);
        }, 1000);
    };

    // TODO: Add varied animation delay
    const animationDelay = {
        animationDelay: `${props.id}`
    };

    return (
        <div className="answer_inner">
            <div className={`answer_container animated ${loading ? 'slideOutRight' : 'slideInLeft'}`}
                 style={animationDelay}>
                <div className={`answer ${highlight}`} onClick={selectAnswer}>
                    {props.answer}
                </div>
            </div>
        </div>
    )
}