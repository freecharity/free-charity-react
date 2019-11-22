import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {openDeleteAnswers} from '../../store/actions';

export default function DeleteAnswers() {
    const {open, answers} = useSelector(state => state.deleteAnswers);
    const dispatch = useDispatch();

    const closeWindow = () => {
        dispatch(openDeleteAnswers(false, []));
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const deleteAnswers = () => {
        submitRequestToServer();
    };

    const submitRequestToServer = () => {
        // TODO add delete query here
        console.log('Deleted the following answers.ts: ');
        console.log(answers);
        closeWindow();
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
