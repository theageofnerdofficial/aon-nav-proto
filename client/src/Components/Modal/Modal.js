import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { MODAL_IMAGE_LIGHTBOX, MODAL_LOGIN_FORM } from '../../constants';

class Modal extends Component {
  render() {
    const getContent = {
      title(mode) {
        if (mode === MODAL_LOGIN_FORM) {
          return 'Login';
        } else if (mode === MODAL_IMAGE_LIGHTBOX) {
          return 'Image Caption Here';
        }
      },
      body(mode, user) {
        if (mode === MODAL_LOGIN_FORM) {
          return <LoginForm userLogin={user} />;
        } else if (mode === MODAL_IMAGE_LIGHTBOX) {
          return (
            <img
              src=""
              style={{ border: '1px solid red', height: 200, width: 200 }}
            />
          );
        }
      },
    };
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
                {getContent.title(this.props.modalReducer.mode)}
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
              {getContent.body(
                this.props.modalReducer.mode,
                this.props.userLogin
              )}
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
