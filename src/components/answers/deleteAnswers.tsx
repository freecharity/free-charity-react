import React from 'react';
import Answer from "./answerInterface";

interface DeleteAnswers {
    toggleDeleteAnswers: any;
    answers: Answer[];
}

// TODO Implement backend functionality
export default function DeleteAnswers(props: DeleteAnswers) {

    const closeWindow = () => {
        props.toggleDeleteAnswers(false, props.answers);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const deleteAnswers = () => {
        submitRequestToServer();
    };

    const submitRequestToServer = () => {
        // TODO add delete query here
        console.log('Deleted the following answers: ');
        console.log(props.answers);
        props.toggleDeleteAnswers(false, []);
    };

    return (
        <div className="delete-answers_container" onClick={closeWindow}>
            <div className="delete-answers_inner" onClick={stopPropagation}>
                <h1>Are you sure you want to delete {props.answers.length} item(s)?</h1>
                <div className="buttons">
                    <button onClick={closeWindow}>Cancel</button>
                    <button onClick={deleteAnswers}>Delete</button>
                </div>
            </div>
        </div>
    )
}