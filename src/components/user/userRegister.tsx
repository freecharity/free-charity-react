import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="register_container">
      <div className="register_inner">
        <h1>Create Profile</h1>
        <p>Track your progress, win badges and share with your friends</p>
        <form>
          <div className="input-group">
            <label>Choose a username</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Your e-mail address</label>
            <input type="text" />
          </div>
          <h2>Set a password</h2>
          <div className="input-group">
            <label>Insert a password</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Confirm the password</label>
            <input type="text" />
          </div>
          <button>Create your account</button>
        </form>
        <p>
          Already have an account? <Link to={'/user/login'}>Login</Link>
        </p>
        <div className="back-button">
          <Link to={'/game'}>Back to game</Link>
        </div>
      </div>
    </div>
  );
}
