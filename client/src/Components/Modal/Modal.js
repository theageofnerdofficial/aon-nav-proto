/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import ImageLightbox from '../Post/PostUI/ImageLightbox/ImageLightbox';
import LoginForm from '../LoginForm/LoginForm';
import ModalBody from './ModalComponents/ModalBody';
import ModalFooter from './ModalComponents/ModalFooter';
import ModalHeader from './ModalComponents/ModalHeader';
import Thumbnail from '../Post/PostUI/Thumbnail';
import settings from '../../config/settings';
import {
  MODAL_IMAGE_LIGHTBOX,
  MODAL_LOGIN_FORM,
  SOURCE_INSTAGRAM_LABEL,
  SOURCE_REDDIT_LABEL,
  SOURCE_TWITTER_LABEL,
} from '../../constants';

class Modal extends Component {
  render() {
    const { modalReducer } = this.props;

    // Get size modal should be depending on mode:
    const getModalSize = () => (modalReducer.size ? modalReducer.size : null);

    return (
      <div
        aria-hidden="true"
        aria-labelledby="mainModalLongTitle"
        className="modal fade"
        id="mainModalLong"
        role="dialog"
        tabIndex="-1"
      >
        <div
          className={`modal-dialog modal-dialog-centered ${getModalSize()}`}
          role="document"
        >
          <div className="modal-content">
            <ModalHeader
              ImageLightbox={ImageLightbox}
              MODAL_IMAGE_LIGHTBOX={MODAL_IMAGE_LIGHTBOX}
              MODAL_LOGIN_FORM={MODAL_LOGIN_FORM}
              modalReducer={modalReducer}
              LoginForm={LoginForm}
              settings={settings}
              SOURCE_INSTAGRAM_LABEL={SOURCE_INSTAGRAM_LABEL}
              SOURCE_REDDIT_LABEL={SOURCE_REDDIT_LABEL}
              SOURCE_TWITTER_LABEL={SOURCE_TWITTER_LABEL}
              Thumbnail={Thumbnail}
            />
            <ModalBody
              ImageLightbox={ImageLightbox}
              LoginForm={LoginForm}
              MODAL_IMAGE_LIGHTBOX={MODAL_IMAGE_LIGHTBOX}
              MODAL_LOGIN_FORM={MODAL_LOGIN_FORM}
              modalReducer={modalReducer}
            />
            <ModalFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
