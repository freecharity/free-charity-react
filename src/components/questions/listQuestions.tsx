import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Question} from 'models/question';
import Pagination from '../pagination/pagination';

export default function ListQuestions() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [showDeleted, setShowDeleted] = useState(false);
    const endpoint = `http://localhost:3000/questions`;

    useEffect(() => {
        getQuestions();
    }, [page, showDeleted]);

    const getQuestions = () => {
        axios.get(endpoint + `?page=${page}&deleted=${showDeleted}`,).then((res) => {
            const questions: Question[] = res.data.results;
            setQuestions(questions);
            setTotal(res.data.total);
        }).catch((err) => {
            alert(err);
        });
    };

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
                <div className="show_deleted">
                    <div className={`checkbox ${showDeleted ? 'checked' : ''}`}
                         onClick={() => setShowDeleted(!showDeleted)}
                    />
                    Show Deleted
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Category</th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {questions.map((q: Question) => {
                        return (
                            <tr key={q.question_id}>
                                <td>{q.category_name}</td>
                                <td>{q.question}</td>
                                <td>{q.answer}</td>
                                <td>
                                    <Link to={`/questions/edit/${q.question_id}`}>Edit</Link>
                                    {!q.deleted ?
                                        <Link to={`/questions/delete/${q.question_id}`}>Delete</Link> :
                                        <Link className="inactive" to={`#`}>Delete</Link>
                                    }
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <Pagination results={questions} page={page} setPage={setPage} total={total}/>
            </div>
        </div>
    );
}
