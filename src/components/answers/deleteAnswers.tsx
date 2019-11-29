import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {openDeleteAnswers, setAnswersUpdated} from '../../store/actions';
import qs from 'qs';
import axios from 'axios';

export default function DeleteAnswers() {
    const {open, answers} = useSelector(state => state.deleteAnswers);
    const dispatch = useDispatch();
    const endpoint = 'http://localhost:3000/answers/multiple';

    const closeWindow = () => {
        dispatch(openDeleteAnswers(false, []));
        dispatch(setAnswersUpdated(true));
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const deleteAnswers = () => {
        submitRequestToServer();
    };

    const submitRequestToServer = () => {
        const answerIds = answers.map(a => a.answer_id);
        axios.delete(endpoint, {
            params: {
                answerIds
            },
            paramsSerializer: params => {
                return qs.stringify(params);
            }
        }).then(() => {
            closeWindow();
        }).catch((err) => {
            console.log(err);
        });
    };

    if (open) {
        return (
            <div className="delete-answers_container" onClick={closeWindow}>
                <div className="delete-answers_inner" onClick={stopPropagation}>
                    <h1>Are you sure you want to delete {answers.length} item(s)?</h1>
                    <div className="buttons">
                        <button onClick={closeWindow}>Cancel</button>
                        <button onClick={deleteAnswers}>Delete</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div/>;
    }
}
