import React, { Component } from 'react';
import loginCreds from '../../config/loginCreds';
import Avatar from '../Avatar/Avatar';

class LoggedIn extends Component {
  render() {
    return (
      <div
        onClick={() => {
          //
          this.props.userLogout();
        }}
        className="btn btn-light btn-link btn-login"
        style={{
          border: 0,
          fontWeight: 300,
          letterSpacing: -1,
          position: 'absolute',
          right: 15,
          top: 185,
          width: 145,
        }}
      >
        Logout
      </div>
    );
  }
}

export default LoggedIn;
