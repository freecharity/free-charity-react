import React, {FormEvent, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useHistory, useParams} from 'react-router';
import axios from 'axios';
import {initialState, Question} from 'models/question';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function DeleteQuestion() {
    const [processing, setProcessing] = useState(false);
    const [question, setQuestion] = useState<Question>(initialState);
    const endpoint = 'http://localhost:3000/questions';
    const {questionId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = () => {
        axios.get(endpoint + `?page=1&deleted=true&id=${questionId}`).then((res) => {
            if (res.data.results.length > 0) {
                const question: Question = res.data.results[0];
                setQuestion(question);
                console.log(question);
            }
        }).catch((err) => {
            alert(err);
        });
    };

    const deleteQuestion = () => {
        setProcessing(true);
        axios.delete(endpoint + `?id=${questionId}`).then((res) => {
            history.goBack();
        }).catch((err) => {
            alert(err);
        }).finally(() => {
            setProcessing(false);
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }
        deleteQuestion();
    };

    return (
        <div className="delete_question_container">
            <div className="delete_question_inner">
                <div className="back">
                    {!processing ?
                        <Link to={'/questions'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </Link>
                        :
                        <Link to={'#'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </Link>}
                    <h1>Delete Question</h1>
                </div>
                <h2 className="text-center">
                    Are you sure you want to delete this question?
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Question</label>
                        <input id="question"
                               name="question"
                               type="text"
                               required={true}
                               value={question.question}
                               disabled={true}/>
                    </div>
                    <div className="input-group">
                        <label>Answer</label>
                        <input id="answer"
                               name="answer"
                               type="text"
                               required={true}
                               value={question.answer}
                               disabled={true}/>
                    </div>
                    <div className="input-group">
                        <label>Incorrect Answer #1</label>
                        <input id="incorrect_1"
                               name="incorrect_1"
                               type="text"
                               required={true}
                               value={question.incorrect_1}
                               disabled={true}/>
                    </div>
                    <div className="input-group">
                        <label>Incorrect Answer #2</label>
                        <input id="incorrect_2"
                               name="incorrect_2"
                               type="text"
                               required={true}
                               value={question.incorrect_2}
                               disabled={true}/>
                    </div>
                    <div className="input-group">
                        <label>Incorrect Answer #3</label>
                        <input id="incorrect_3"
                               name="incorrect_3"
                               type="text"
                               required={true}
                               value={question.incorrect_3}
                               disabled={true}/>
                    </div>
                    <div className="input-group">
                        <label>Category</label>
                        <input name="category_name"
                               id="category_name"
                               required={true}
                               value={question.category_name}
                               disabled={true}>
                        </input>
                    </div>
                    <div className="buttons">
                        {!processing ?
                            <Link className={"cancel"} to={"/questions"}>Cancel</Link>
                            :
                            <a className={"cancel"}>Cancel</a>}
                        {!processing ?
                            <button>Delete Question</button>
                            :
                            <button type={"button"}>Loading...</button>}
                    </div>
                </form>
            </div>
        </div>
    );
}
