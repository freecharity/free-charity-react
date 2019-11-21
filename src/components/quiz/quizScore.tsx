import React from 'react';

interface QuizScoreProps {
    category: string;
    score: number;
}

export default function QuizScore(props: QuizScoreProps) {
    return (
        <div className="quiz-score_container">
            <div className="quiz-score_inner">
                <div className="left">
                    <div className="icon">
                        <img src="" alt=""/>
                    </div>
                    <h3>{props.category}</h3>
                </div>
                <div className="score">
                    {props.score * 10}
                </div>
            </div>
        </div>
    )
}