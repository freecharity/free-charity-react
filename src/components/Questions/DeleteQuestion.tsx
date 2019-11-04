import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './DeleteQuestion.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function DeleteQuestion() {
  const [redirect, setRedirect] = useState(false);

  const goBack = () => {
    setRedirect(true);
  };

  const deleteItem = () => {
    alert('Deleted item');
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/questions" />;
  }

  return (
    <div className="delete_question_container">
      <div className="delete_question_inner">
        <div className="delete_question_back">
          <Link to={'/questions'}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </Link>
          <h1>Delete Question</h1>
        </div>
        <h1 className="text-center">
          Are you sure you want to delete this question?
        </h1>
        <form>
          <div className="input-group">
            <label>Question</label>
            <input type="text" disabled />
          </div>
          <div className="input-group">
            <label>Answer</label>
            <input type="text" disabled />
          </div>
          <div className="input-group">
            <label>Incorrect Answer #1</label>
            <input type="text" disabled />
          </div>
          <div className="input-group">
            <label>Incorrect Answer #2</label>
            <input type="text" disabled />
          </div>
          <div className="input-group">
            <label>Incorrect Answer #3</label>
            <input type="text" disabled />
          </div>
          <div className="form-submit-buttons">
            <button type="button" onClick={goBack}>
              Cancel
            </button>
            <button type="button" onClick={deleteItem}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
