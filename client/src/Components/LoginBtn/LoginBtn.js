import React, { Component } from 'react';

class LoginBtn extends Component {
  render() {
    return (
      <div
        className="btn btn-light btn-link btn-login"
        data-toggle="modal"
        data-target="#exampleModalLong"
        style={{
          border: 0,
          right: 15,
          top: 185,
          position: 'absolute',
          width: 145,
          fontWeight: 300,
          letterSpacing: -1,
        }}
      >
        Login/Register
      </div>
    );
  }
}

export default LoginBtn;
