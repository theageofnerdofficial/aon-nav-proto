/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class AccordionImages extends Component {
  render() {
    const {
      data,
      MODAL_IMAGE_LIGHTBOX,
      modalReducer,
      modalUpdateMode,
    } = this.props;

    return (
      <div className="col-12">
        {data.preview_img_arr.map((img, index) => {
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
        })}
      </div>
    );
  }
}

export default AccordionImages;
