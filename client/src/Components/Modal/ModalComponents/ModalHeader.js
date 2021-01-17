import React, { Component } from 'react';

class ModalHeader extends Component {
  render() {
    const {
      MODAL_IMAGE_LIGHTBOX,
      MODAL_LOGIN_FORM,
      SOURCE_INSTAGRAM_LABEL,
      SOURCE_REDDIT_LABEL,
      SOURCE_TWITTER_LABEL,
      Thumbnail,
      modalReducer,
      settings,
    } = this.props;

    const getTitleByMode = (mode, data) => {
      if (mode === MODAL_LOGIN_FORM) {
        return 'Login';
      } else if (mode === MODAL_IMAGE_LIGHTBOX) {
        return data ? (
          <React.Fragment>
            <Thumbnail
              settings={settings}
              source={data.source}
              SOURCE_INSTAGRAM_LABEL={SOURCE_INSTAGRAM_LABEL}
              SOURCE_REDDIT_LABEL={SOURCE_REDDIT_LABEL}
              SOURCE_TWITTER_LABEL={SOURCE_TWITTER_LABEL}
            />
            {data.text}
          </React.Fragment>
        ) : (
          'Post image'
        );
      }
    };
    return (
      <div className="modal-header">
        <h5
          className="modal-title"
          id="mainModalLongTitle"
          style={{
            fontWeight: 300,
            letterSpacing: '-1px',
          }}
        >
          {getTitleByMode(modalReducer.mode, modalReducer.data)}
        </h5>
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

export default ModalHeader;
