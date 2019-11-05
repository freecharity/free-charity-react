import React from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  return (
    <div className="login_container">
      <div className="login_inner">
        <h1>User Profile</h1>
        <p>Track your progress, win badges and share with your friends</p>
        <h2>Sign Up</h2>
        <Link to={'/user/register'}>
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Create new
          account
        </Link>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="text" />
          </div>
          <button>Login</button>
        </form>
        <div className="back-button">
          <Link to={'/game'}>Back to game</Link>
        </div>
      </div>
    </div>
  );
}
