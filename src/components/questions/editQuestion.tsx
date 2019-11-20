import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useHistory, useParams} from 'react-router';
import axios from 'axios';
import {initialState, Question} from 'models/question';
import {Category} from 'models/category';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function EditQuestion() {
    const [processing, setProcessing] = useState(false);
    const [question, setQuestion] = useState<Question>(initialState);
    const [categories, setCategories] = useState<Category[]>([]);
    const {questionId} = useParams();
    const history = useHistory();
    const endpoint = "http://localhost:3000/questions";

    useEffect(() => {
        getQuestion();
        getCategories();
    }, []);

    const getQuestion = () => {
        axios.get(endpoint + `?page=1&deleted=true&id=${questionId}`).then((res) => {
            if (res.data.results.length > 0) {
                const question: Question = res.data.results[0];
                setQuestion(question);
            }
        }).catch((err) => {
            alert(err);
        });
    };

    const getCategories = () => {
        axios(`http://localhost:3000/categories`).then((res) => {
            const categories: Category[] = res.data.results;
            setCategories(categories);
        }).catch((error) => {
            alert(error);
        });
    };

    const putQuestion = () => {
        setProcessing(true);
        axios.put(endpoint, question).then((res) => {
            history.goBack();
        }).catch((err) => {
            alert(err);
        }).finally(() => {
            setProcessing(false);
        });
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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }
        putQuestion();
    };

    return (
        <div className="edit_question_container">
            <div className="edit_question_inner">
                <div className="back">
                    {!processing ?
                        <Link to={'/questions'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </Link>
                        :
                        <Link to={'#'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </Link>}
                    <h1>Edit Question</h1>
                </div>
                {questionId != -1 ? <form onSubmit={handleSubmit}>
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
                        <input id="answer"
                               name="answer"
                               type="text"
                               required={true}
                               value={question.answer}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label>Incorrect Answer #1</label>
                        <input id="incorrect_1"
                               name="incorrect_1"
                               type="text"
                               required={true}
                               value={question.incorrect_1}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label>Incorrect Answer #2</label>
                        <input id="incorrect_2"
                               name="incorrect_2"
                               type="text"
                               required={true}
                               value={question.incorrect_2}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label>Incorrect Answer #3</label>
                        <input id="incorrect_3"
                               name="incorrect_3"
                               type="text"
                               required={true}
                               value={question.incorrect_3}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label>Category</label>
                        <select name="category_id"
                                id="category_id"
                                required={true}
                                value={question.category_id}
                                onChange={handleInputChange}>
                            {categories.map((c: Category) => {
                                return <option key={c.category_id} value={c.category_id}>{c.name}</option>;
                            })}
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Deleted</label>
                        <select name="deleted"
                                id="deleted"
                                required={true}
                                value={question.deleted}
                                onChange={handleInputChange}>
                            <option value={1}>True</option>
                            <option value={0}>False</option>
                        </select>
                    </div>
                    <div className="buttons">
                        {!processing ?
                            <Link className={"cancel"} to={"/questions"}>Cancel</Link>
                            :
                            <a className={"cancel"}>Cancel</a>}
                        {!processing ?
                            <button>Update Question</button>
                            :
                            <button type={"button"}>Loading...</button>}
                    </div>
                </form> : ''}
            </div>
        </div>
    );
}
