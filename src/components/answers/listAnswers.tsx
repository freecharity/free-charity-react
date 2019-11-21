import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {Answer} from 'models/answer';
import Pagination from '../pagination/pagination';
import Checkbox from '../checkbox/checkbox';
import {openDeleteAnswers} from '../../store/actions';

export default function ListAnswers() {
    const dispatch = useDispatch();
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [showDeleted, setShowDeleted] = useState(false);
    const [showCorrect, setShowCorrect] = useState(false);
    const endpoint = 'http://localhost:3000/answers';

    useEffect(() => {
        getAnswers();
    }, [page]);

    const getAnswers = () => {
        axios.get(endpoint + `?page=${page}&deleted=${showDeleted}&correct=${showCorrect}`).then((res) => {
            if (res.data.results.length > 0) {
                const answers: Answer[] = res.data.results;
                setAnswers(answers);
                setTotal(res.data.total);
            }
        }).catch((err) => {
            alert(err);
        });
    };

    const selectAnswer = (answer: Answer, checked: boolean) => {
        const arr: Answer[] = selectedAnswers;
        if (checked) {
            arr.push(answer);
        } else {
            const index: number = arr.findIndex(a => a.answer_id === answer.answer_id);
            arr.splice(index, 1);
        }
        setSelectedAnswers(arr);
    };

    const deleteAnswers = () => {
        // TODO: fix selectedAnswers not being passed to openDeleteAnswers
        dispatch(openDeleteAnswers(true, selectedAnswers));
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
                    {answers.map((a: Answer) => {
                        return (
                            <tr key={a.answer_id}>
                                <td>{a.user_id}</td>
                                <td>{a.ip}</td>
                                <td>{a.correct == 1 ? 'true' : false}</td>
                                <td>{a.question_id}</td>
                                <td>{a.answer}</td>
                                <td>
                                    <Checkbox item={a} onChecked={selectAnswer}/>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <Pagination results={answers} page={page} setPage={setPage} total={total}/>
            </div>
        </div>
    );
}
