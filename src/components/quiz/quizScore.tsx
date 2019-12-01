import React from 'react';
import {Category} from '../../models/category';
import {getCategory} from '../../util/avatars';

interface QuizScoreProps {
    category: Category;
    score: number;
    loading: boolean;
}

export default function QuizScore(props: QuizScoreProps) {
    return (
        <div className={`quiz-score_container`}>
            <div className="quiz-score_inner">
                <div className="left">
                    <div className="icon">
                        <img src={getCategory(props.category.image)} alt=""/>
                    </div>
                    <h3>{props.category.name}</h3>
                </div>
                <div className={`score animated  ${props.loading ? 'fadeIn' : ''}`}>
                    {props.score * 10}
                </div>
            </div>
        </div>
    )
}
