import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <input
          className="form-control"
          placeholder="Email address"
          style={{ fontWeight: 300 }}
        />
        <input
          className="form-control"
          placeholder="Password"
          style={{ fontWeight: 300 }}
          type="password"
        />
        <br />
        <button
          className="btn btn-primary form-control"
          style={{ fontWeight: 300 }}
        >
          Sign In
        </button>
        <br />
        <br />
        <div
          className="text-center form-control border-0"
          style={{ background: 'none', fontSize: '0.8em', fontWeight: 300 }}
        >
          Don't have an account? <a href="#">Sign Up</a>
        </div>
      </div>
    );
  }
}

export default LoginForm;
