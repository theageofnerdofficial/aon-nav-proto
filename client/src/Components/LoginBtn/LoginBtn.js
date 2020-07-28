import React, { Component } from 'react';
import loginCreds from '../../config/loginCreds';
import Avatar from '../Avatar/Avatar';

class LoginBtn extends Component {
  render() {
    return (
      <React.Fragment>
        {loginCreds.storageItem.getUsername ? (
          <div
            className="btn btn-light btn-link btn-login"
            style={{
              border: 0,
              fontWeight: 300,
              letterSpacing: -1,
              position: 'absolute',
              right: 15,
              top: 185,
              width: 180,
            }}
          >
            {Avatar({
              src: loginCreds.storageItem.getId(),
              style: { border: '0', width: '20px' },
            })}{' '}
            {loginCreds.storageItem.getUsername()}
          </div>
        ) : (
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
        )}
      </React.Fragment>
    );
  }
}

export default LoginBtn;
