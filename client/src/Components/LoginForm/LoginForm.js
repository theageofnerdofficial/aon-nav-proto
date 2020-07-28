import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const { elements } = e.target;
            const loginForm = {
              username: elements['username'].value,
              password: elements['password'].value,
            };
            this.props.userLogin(loginForm);
          }}
        >
          <input
            className="form-control"
            name="username"
            placeholder="Username"
            style={{ fontWeight: 300 }}
          />
          <input
            className="form-control"
            name="password"
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
            Don't have an account? <a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
