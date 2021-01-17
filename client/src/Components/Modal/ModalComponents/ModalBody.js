import React, { Component } from 'react';

class ModalBody extends Component {
  render() {
    const {
      ImageLightbox,
      LoginForm,
      MODAL_LOGIN_FORM,
      MODAL_IMAGE_LIGHTBOX,
      modalReducer,
      userLogin,
    } = this.props;

    const getBodyByMode = (mode, data, user) => {
      if (mode === MODAL_LOGIN_FORM) {
        return <LoginForm userLogin={user} />;
      } else if (mode === MODAL_IMAGE_LIGHTBOX) {
        return <ImageLightbox data={data} />;
      }
    };
    return (
      <div className="modal-body text-center">
        {getBodyByMode(modalReducer.mode, modalReducer.data, userLogin)}
      </div>
    );
  }
}

export default ModalBody;
