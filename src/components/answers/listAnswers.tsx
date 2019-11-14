import React, {ChangeEvent, useState} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Answer from "./answerInterface";
import jsonFile from "data/answers_data.json";

interface ListAnswers {
    toggleDeleteAnswers: any;
}

export default function ListAnswers(props: ListAnswers) {
    // TODO figure out why I need to suppress this error
    // @ts-ignore
    const [answers, setAnswers] = useState<Answer[]>(jsonFile);
    const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

    const selectAnswer = (answer: Answer, e: ChangeEvent<HTMLInputElement>) => {
        const arr: Answer[] = selectedAnswers;
        // if input has been checked
        if (e.target.checked) {
            arr.push(answer);
        } else {
            const index: number = arr.findIndex(a => a.id === answer.id);
            arr.splice(index, 1);
        }
        setSelectedAnswers(arr);
    };

    const deleteAnswers = () => {
        props.toggleDeleteAnswers(true, selectedAnswers);
    };

    return (
        <div className="answers_container">
            <div className="answers_inner">
                <h1>List Answers</h1>
                <div className="menu">
                    <div className="search">
                        <input type="text" placeholder="Search categories"/>
                        <button>Search</button>
                    </div>
                    <div className="create_button">
                        <button onClick={deleteAnswers}>Delete Answers</button>
                    </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>User</th>
                        <th>Ip Address</th>
                        <th>Correct</th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Select</th>
                    </tr>
                    </thead>
                    <tbody>
                    {answers.map((a) => {
                        return (
                            <tr key={a.id}>
                                <td>{a.user}</td>
                                <td>{a.ipAddress}</td>
                                <td>{a.correct.toString()}</td>
                                <td>{a.question}</td>
                                <td>{a.answer}</td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" onChange={(e) => selectAnswer(a, e)}/>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <div className="pagination">
                    <div className="buttons">
                        <button><FontAwesomeIcon icon={faArrowLeft}/></button>
                        <button className="selected">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button><FontAwesomeIcon icon={faArrowRight}/></button>
                    </div>
                    <div className="results">
                        Showing 3 of 3 results
                    </div>
                </div>
            </div>
        </div>
    )
}