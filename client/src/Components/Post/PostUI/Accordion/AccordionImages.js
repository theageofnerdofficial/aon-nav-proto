/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

// UPDATE NOTE: DEPENDENCY INJECT THIS...
import { MODAL_IMAGE_LIGHTBOX } from '../../../../constants';

class AccordionImages extends Component {
  render() {
    const { modalReducer, modalUpdateMode, preview_img_arr } = this.props;
    return (
      <div className="col-12">
        {preview_img_arr.map((img, index) => {
          return (
            <img
              alt="Accordion media preview" // UPDATE NOTE: Make more meaningful
              className="img-fluid mx-1 rounded"
              data-target="#exampleModalLong"
              data-toggle="modal"
              modalReducer={modalReducer}
              onClick={() => modalUpdateMode(MODAL_IMAGE_LIGHTBOX)}
              src={preview_img_arr[index].resolutions[0].url.replaceAll(
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
