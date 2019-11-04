import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './ListQuestions.scss';

import jsonFile from 'data/questions.json';

interface Question {
  id: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  difficulty: string;
}

export default function ListQuestions() {
  const [questions, setQuestions] = useState<Question[]>(jsonFile.questions);

  return (
    <div className="list_questions_container">
      <div className="list_questions_inner">
        <h1>List Questions</h1>
        <div className="list_questions_menu">
          <div className="list_questions_search">
            <input type="text" placeholder="Search questions" />
            <button>Search</button>
          </div>
          <div className="list_questions_create_button">
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
      </div>
    </div>
  );
}
