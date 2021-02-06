/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class AccordionMediaItem extends Component {
  render() {
    const {
      data,
      index,
      MODAL_IMAGE_LIGHTBOX,
      modalReducer,
      modalUpdateMode,
    } = this.props;

    const getMediaImg = () => {
      if (
        data.preview_img_arr.length > 0 &&
        data.preview_img_arr[index].resolutions[0]
      ) {
        return (
          <img
            alt="Accordion media preview" // UPDATE NOTE: Make more meaningful
            className="img-fluid mx-1 rounded"
            data-target="#mainModalLong"
            data-toggle="modal"
            modalReducer={modalReducer}
            onClick={() =>
              modalUpdateMode({
                data: data,
                mode: MODAL_IMAGE_LIGHTBOX,
                size: 'modal-xl',
              })
            }
            src={data.preview_img_arr[index].resolutions[0].url.replaceAll(
              /&amp;/gi,
              '&'
            )}
          />
        );
      }
    };

    /*
    const getMediaVideo = () => {
      return (
        <video>
          <source></source>
        </video>
      );
    };*/

    /*
    const getMediaItem = () => {
      if (true) {
        return getMediaImg();
      }
    };*/

    return <React.Fragment>{getMediaImg()}</React.Fragment>;
  }
}

export default AccordionMediaItem;
