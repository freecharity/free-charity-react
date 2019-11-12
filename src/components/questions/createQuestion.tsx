import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';

import Question from './questionInterface';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function CreateQuestion() {

    const [processing, setProcessing] = useState(false);

    const [question, setQuestion] = useState<Question>({
        id: "",
        question: "",
        correctAnswer: "",
        incorrectAnswer1: "",
        incorrectAnswer2: "",
        incorrectAnswer3: "",
        difficulty: "",
        category: ""
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }
        submitQuestionToServer();
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        event.persist();
        setQuestion({
            ...question,
            [event.target.name]: event.target.value
        });
    };

    const submitQuestionToServer = () => {
        setProcessing(true);
        console.log('Adding Question:');
        console.log(question);
    };

    return (
        <div className="create_question_container">
            <div className="create_question_inner">
                <div className="back">
                    {!processing ?
                        <Link to={'/questions'}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </Link>
                        :
                        <Link to={'#'}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </Link>}
                    <h1>Create Question</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Question</label>
                        <input id="question"
                               name="question"
                               type="text"
                               required={true}
                               value={question.question}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label>Answer</label>
                        <input id="correctAnswer"
                               name="correctAnswer"
                               type="text"
                               required={true}
                               value={question.correctAnswer}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label>Incorrect Answer #1</label>
                        <input id="incorrectAnswer1"
                               name="incorrectAnswer1"
                               type="text"
                               required={true}
                               value={question.incorrectAnswer1}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label>Incorrect Answer #2</label>
                        <input id="incorrectAnswer2"
                               name="incorrectAnswer2"
                               type="text"
                               required={true}
                               value={question.incorrectAnswer2}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label>Incorrect Answer #3</label>
                        <input id="incorrectAnswer3"
                               name="incorrectAnswer3"
                               type="text"
                               required={true}
                               value={question.incorrectAnswer3}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label>Difficulty</label>
                        <select name="difficulty"
                                id="difficulty"
                                required={true}
                                value={question.difficulty}
                                onChange={handleInputChange}>
                            <option value=""
                                    defaultValue=""
                                    disabled={true}
                                    hidden={true}>Select a difficulty
                            </option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Category</label>
                        <select name="category"
                                id="category"
                                required={true}
                                value={question.category}
                                onChange={handleInputChange}>
                            <option value=""
                                    defaultValue=""
                                    disabled={true}
                                    hidden={true}>Select a category
                            </option>
                            <option value="easy">Syntax</option>
                            <option value="data structures">Data Structures</option>
                            <option value="logic">Logic</option>
                        </select>
                    </div>
                    <div className="buttons">
                        {!processing ?
                            <Link className={"cancel"} to={"/questions"}>Cancel</Link>
                            :
                            <a className={"cancel"}>Cancel</a>}
                        {!processing ?
                            <button>Create Question</button>
                            :
                            <button type={"button"}>Loading...</button>}
                    </div>
                </form>
            </div>
        </div>
    );
}
