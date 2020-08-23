import React, { Component } from 'react';
import countries from '../../config/countries';

class SignupForm extends Component {
  componentDidMount() {
    document.getElementById('ui-login-btn-wrapper').style.display = 'none';
  }
  componentWillUnmount() {
    document.getElementById('ui-login-btn-wrapper').style.display = 'block';
  }
  render() {
    const hasPasswordMatch = (signupForm) =>
      signupForm.password !== signupForm.password2;
    const validateForm = (signupForm) => {
      let usernames = [];
      let emails = [];
      console.log(signupForm.hasConfirmed);
      if (!signupForm.hasConfirmed) {
        window.alert('You must agree to terms and conditions');
      } else {
        if (hasPasswordMatch(signupForm)) {
          window.alert('Passwords do not match');
          return false;
        }
        fetch('/users/list')
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            } else {
              return response.json();
            }
          })
          .then((res) => {
            res.map((r) => {
              usernames.push(r.username.toLowerCase());
              emails.push(r.email.toLowerCase());
            });
          })
          .then(() => {
            if (usernames.includes(signupForm.username)) {
              alert('That username has already been taken');
              return;
            } else {
              if (emails.includes(signupForm.email)) {
                alert('That email address already belongs to an account');
                return;
              } else {
                alert('Signup successful. Redirecting in 2 seconds...');
                this.props.userSignup(signupForm);
                const loginForm = {
                  username: signupForm.username,
                  password: signupForm.password,
                };
                this.props.userLogin(loginForm);
              }
            }
          })
          .catch((e) => {
            alert('There has been a problem with your signup: ' + e.message);
          });
      }
    };
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const { elements } = e.target;
            const signupForm = {
              username: elements['username'].value,
              email: elements['email'].value,
              password: elements['password'].value,
              password2: elements['password2'].value,
              location: elements['location'].value,
              hasConfirmed: elements['checkagree'].checked,
            };
            validateForm(signupForm);
          }}
        >
          <input
            className="font-weight-light form-control my-2"
            name="username"
            minLength="8"
            maxLength="100"
            placeholder="Username"
            required
            type="text"
          />
          <input
            className="font-weight-light form-control"
            name="email"
            minLength="8"
            placeholder="Email address"
            required
            type="email"
          />
          <input
            className="font-weight-light form-control my-2"
            name="password"
            minLength="8"
            placeholder="Password"
            type="password"
            required
          />
          <input
            className="font-weight-light form-control my-2"
            name="password2"
            placeholder="Confirm Password"
            type="password"
            required
          />
          <p className="font-weight-light p-0 pt-2 m-0 text-muted">Location:</p>
          <select
            className="form-control mb-2 font-weight-light"
            name="location"
            placeholder="Location"
          >
            {countries.map((country) => {
              return (
                <option
                  className="font-weight-light"
                  selected={country.name === 'United Kingdom' ? true : false}
                  required
                >
                  {country.name}
                </option>
              );
            })}
          </select>
          <br />
          <div>
            <p className="font-weight-light">
              <input type="checkbox" name="checkagree" />
              &nbsp;I have read and agree to the{' '}
              <a href="#">Terms & Conditions</a>
            </p>
          </div>
          <br />
          <button className="btn btn-primary font-weight-light form-control my-2">
            Sign Up
          </button>
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default SignupForm;
