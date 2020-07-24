import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';

class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLongTitle"
                style={{
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '-1px',
                }}
              >
                Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <LoginForm />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-modal-close btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
