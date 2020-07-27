import React, { Component } from 'react';
import countries from '../../config/countries';

class SignupForm extends Component {
  componentDidMount() {
    // get usernames and emails arrs
    // onchange check if value matches these arrs
  }
  render() {
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
            if (signupForm.password !== signupForm.password2) {
              window.alert('Passwords do not match');
            }
            if (!signupForm.hasConfirmed) {
              window.alert('You must agree to terms blah blah');
            } else {
              window.alert(
                'Okay, you are signed up Chris... click the users list button at the top left to see yourself hopefully.... automatic redirect to MyNerd coming soon'
              );
            }
            this.props.userSignup(signupForm);
            // redirect
          }}
        >
          <input
            className="font-weight-light form-control my-2"
            name="username"
            minLength="8"
            maxLength="100"
            placeholder="Username"
          />
          <input
            className="font-weight-light form-control"
            name="email"
            minLength="8"
            placeholder="Email address"
          />
          <input
            className="font-weight-light form-control my-2"
            name="password"
            minLength="8"
            placeholder="Password"
            type="password"
          />
          <input
            className="font-weight-light form-control my-2"
            name="password2"
            placeholder="Confirm Password"
            type="password"
          />
          <p className="font-weight-light p-0 pt-2 m-0 text-muted">Location:</p>
          <select
            className="form-control mb-2 font-weight-light"
            name="location"
            placeholder="Location"
          >
            {countries.map((country) => {
              //

              return (
                <option
                  className="font-weight-light"
                  selected={country.name === 'United Kingdom' ? true : false}
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
