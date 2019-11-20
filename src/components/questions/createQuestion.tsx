import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import axios from 'axios';
import {initialState, Question} from 'models/question';
import {Category} from 'models/category';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function CreateQuestion() {
    const [processing, setProcessing] = useState(false);
    const [question, setQuestion] = useState<Question>(initialState);
    const [categories, setCategories] = useState<Category[]>([]);
    const history = useHistory();
    const endpoint = `http://localhost:3000/questions`;

    useEffect(() => {
        getCategories();
    }, []);

    const createQuestion = () => {
        setProcessing(true);
        axios.post(endpoint, question).then((res) => {
            history.goBack();
        }).catch((err) => {
            alert(err);
        }).finally(() => {
            setProcessing(false);
        });
    };

    const getCategories = () => {
        axios(`http://localhost:3000/categories`).then((res) => {
            console.log(res);
            const categories: Category[] = res.data.results;
            setCategories(categories);
        }).catch((error) => {
            alert(error);
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
        createQuestion();
    };

    return (
        <div className="create_question_container">
            <div className="create_question_inner">
                <div className="back">
                    {!processing ?
                        <Link to={'/questions'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </Link>
                        :
                        <Link to={'#'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
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
