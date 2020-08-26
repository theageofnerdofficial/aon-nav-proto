import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import countries from '../../config/countries';

class SignupForm extends Component {
  componentDidMount() {
    document.getElementById('ui-login-btn-wrapper').style.display = 'none';
  }
  componentWillUnmount() {
    document.getElementById('ui-login-btn-wrapper').style.display = 'block';
  }
  render() {
    const validateForm = (fields) => {
      let usernames = [];
      let emails = [];
      fetch('/users/listsecure')
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
          if (usernames.includes(fields.username)) {
            alert('That username has already been taken');
            return;
          } else {
            if (emails.includes(fields.email)) {
              alert('That email address already belongs to an account');
              return;
            } else {
              alert('Signup successful. Redirecting in 2 seconds...');
              this.props.userSignup(fields);
              const loginForm = {
                username: fields.username,
                password: fields.password,
              };
              this.props.userLogin(loginForm);
            }
          }
        })
        .catch((e) => {
          alert('There has been a problem with your signup: ' + e.message);
        });
    };
    return (
      <div>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            location: 'United Kingdom',
            acceptTerms: false,
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .min(8, 'Username must be at least 8 characters')
              .required('Username is required'),
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            password: Yup.string()
              .min(8, 'Password must be at least 8 characters')
              .required('Password is required'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Confirm Password is required'),
            acceptTerms: Yup.bool().oneOf(
              [true],
              'You must accept Terms & Conditions'
            ),
          })}
          onSubmit={(fields) => {
            validateForm(fields);
          }}
        >
          {({ errors, status, touched }) => (
            <Form>
              <div className="form-row">
                <div class="form-group col-12">
                  <label>Username</label>
                  <Field
                    name="username"
                    as="input"
                    className={
                      'form-control' +
                      (errors.username && touched.username ? ' is-invalid' : '')
                    }
                  ></Field>
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    'form-control' +
                    (errors.email && touched.email ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={
                      'form-control' +
                      (errors.password && touched.password ? ' is-invalid' : '')
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group col">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className={
                      'form-control' +
                      (errors.confirmPassword && touched.confirmPassword
                        ? ' is-invalid'
                        : '')
                    }
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="location">Location</label>
                  <Field
                    name="location"
                    as="select"
                    className={
                      'form-control' +
                      (errors.location && touched.location ? ' is-invalid' : '')
                    }
                  >
                    {countries.map((country) => {
                      return (
                        <option
                          className="font-weight-light"
                          selected={
                            country.name === 'United Kingdom' ? true : false
                          }
                          required
                        >
                          {country.name}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
              <br />
              <div className="form-group form-check">
                <Field
                  type="checkbox"
                  name="acceptTerms"
                  className={
                    'form-check-input ' +
                    (errors.acceptTerms && touched.acceptTerms
                      ? ' is-invalid'
                      : '')
                  }
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  Accept Terms & Conditions
                </label>
                <ErrorMessage
                  name="acceptTerms"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary col-12 font-weight-light"
                >
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default SignupForm;
