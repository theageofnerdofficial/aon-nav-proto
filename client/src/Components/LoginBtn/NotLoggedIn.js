import React, { Component } from 'react';
import { MODAL_LOGIN_FORM } from '../../constants';

class NotLoggedIn extends Component {
  render() {
    const { modalUpdateMode } = this.props;
    return (
      <div
        className="btn btn-light btn-link btn-login"
        data-target="#exampleModalLong"
        data-toggle="modal"
        onClick={() =>
          modalUpdateMode({
            mode: MODAL_LOGIN_FORM,
            data: {},
            size: 'modal-sm',
          })
        }
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
