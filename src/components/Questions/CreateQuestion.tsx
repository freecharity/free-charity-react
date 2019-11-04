import React from 'react';
import { Link } from 'react-router-dom';

import './CreateQuestion.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function CreateQuestion() {
  return (
    <div className="create_question_container">
      <div className="create_question_inner">
        <div className="create_question_back">
          <Link to={'/questions'}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </Link>
          <h1>Create Question</h1>
        </div>
        <form>
          <div className="input-group">
            <label>Question</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Answer</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Incorrect Answer #1</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Incorrect Answer #2</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Incorrect Answer #3</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Difficulty</label>
            <select name="select_difficulty" id="select_difficulty">
              <option value="easy">Easy</option>
              <option value="easy">Medium</option>
              <option value="easy">Hard</option>
              <option value="easy">Expert</option>
            </select>
          </div>
          <div className="input-group">
            <label>Category</label>
            <select name="select_category" id="select_category">
              <option value="easy">Syntax</option>
              <option value="easy">Data Structures</option>
              <option value="easy">Logic</option>
            </select>
          </div>
          <button>Create Question</button>
        </form>
      </div>
    </div>
  );
}
