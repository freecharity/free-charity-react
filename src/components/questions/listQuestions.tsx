import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import jsonFile from 'data/questions.json';
import Question from './questionInterface';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

export default function ListQuestions() {
    const [questions, setQuestions] = useState<Question[]>(jsonFile.questions);

    return (
        <div className="list_questions_container">
            <div className="list_questions_inner">
                <h1>List Questions</h1>
                <div className="menu">
                    <div className="search">
                        <input type="text" placeholder="Search questions"/>
                        <button>Search</button>
                    </div>
                    <div className="create_button">
                        <Link to={'/questions/create'}>Create Question</Link>
                    </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Difficulty</th>
                        <th>Category</th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {questions.map((q) => {
                        return (
                            <tr key={q.id}>
                                <td>{q.difficulty}</td>
                                <td>{q.category}</td>
                                <td>{q.question}</td>
                                <td>{q.correctAnswer}</td>
                                <td>
                                    <Link to={'/questions/edit'}>Edit</Link>
                                    <Link to={'/questions/delete'}>Delete</Link>
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
    );
}
