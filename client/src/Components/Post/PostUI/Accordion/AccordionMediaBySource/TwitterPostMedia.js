/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class TwitterPostMedia extends Component {
  render() {
    const {
      data,
      MODAL_IMAGE_LIGHTBOX,
      modalReducer,
      modalUpdateMode,
    } = this.props;

    data.imgUrls = [];

    // :
    const getEntitiesMedia = () => {
      return this.props.data.entities_media.map((img, index) => {
        data.imgUrls.push(img.media_url);
        return (
          <img
            alt="Accordion media preview" // UPDATE NOTE: Make more meaningful
            className="img-fluid mx-1 rounded"
            data-target="#mainModalLong"
            data-toggle="modal"
            modalReducer={modalReducer}
            src={img.media_url}
            onClick={() =>
              modalUpdateMode({
                data: data,
                mode: MODAL_IMAGE_LIGHTBOX,
                size: 'modal-xl',
              })
            }
          />
        );
      });
    };

    /*
    const getExtendedEntitiesMedia = () => {
      //
      return;
    };*/

    return (
      <React.Fragment>
        {data.entities_media && data.entities_media.length >= 1
          ? getEntitiesMedia()
          : null}
      </React.Fragment>
    );
  }
}

export default TwitterPostMedia;
