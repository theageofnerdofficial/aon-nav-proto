import React, { Component } from 'react';
// import loginCreds from '../../config/loginCreds';
import Avatar from '../Avatar/Avatar';

class LoggedIn extends Component {
  render() {
    return (
      <div
        className="m-0 p-0 col-12 row"
        style={{
          fontWeight: 300,
          letterSpacing: -1,
          position: 'absolute',
          right: 15,
          top: 185,
          width: 220,
          // zIndex: 99999999,
        }}
      >
        <div
          className="m-0 p-0 col-8"
          onClick={() => {
            window.alert('Work in progress');
          }}
          style={{
            border: 0,
            fontWeight: 300,
            letterSpacing: -1,
          }}
        >
          <button className="btn btn-light btn-link btn-login form-control">
            <Avatar src="kdslkds" style={{ width: 20 }}></Avatar> My Profile
          </button>
        </div>
        <div
          className="m-0 p-0 col-4"
          onClick={() => {
            //
            this.props.userLogout();
          }}
          style={{
            border: 0,
            fontWeight: 300,
            letterSpacing: -1,
          }}
        >
          <button className="btn btn-light btn-link btn-login form-control">
            Logout
          </button>
        </div>

        {/*
        <div
          className="m-0 p-0 col-6 border"
          onClick={() => {
            //
            this.props.userLogout();
          }}
          className="btn btn-light btn-link btn-login"
          style={{
            border: 0,
            fontWeight: 300,
            letterSpacing: -1,
          }}
        >
          Logout
        </div> */}
      </div>
    );
  }
}

export default LoggedIn;
