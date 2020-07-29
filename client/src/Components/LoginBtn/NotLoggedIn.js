import React, { Component } from 'react';

class NotLoggedIn extends Component {
  render() {
    return (
      <div
        className="btn btn-light btn-link btn-login"
        data-toggle="modal"
        data-target="#exampleModalLong"
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
        Login/Register
      </div>
    );
  }
}

export default NotLoggedIn;
