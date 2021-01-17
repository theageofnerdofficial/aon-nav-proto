/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class ImageLightbox extends Component {
  render() {
    const { data } = this.props;

    // From an image array, obtain the highest resolution image data:
    const getHighResImg = (data) => {
      const { preview_img_arr } = data;

      // :
      const imgResArr = preview_img_arr[0].resolutions;

      // :
      const imgRes = {
        h: preview_img_arr[0].resolutions[imgResArr.length - 1].height,
        w: imgResArr[imgResArr.length - 1].width,
      };

      return {
        h: imgRes.h,
        w: imgRes.w,
        url: imgResArr[imgResArr.length - 1].url.replaceAll(/&amp;/gi, '&'),
      };
    };

    // :
    const highResImg = getHighResImg(data);

    return (
      <React.Fragment>
        {/* <p>{data ? highResImg.url : null}</p>*/}
        <img
          className="img-fluid rounded"
          src={data ? highResImg.url : null}
          style={
            {
              // height: highResImg.h,
              // width: highResImg.w,
            }
          }
        />
      </React.Fragment>
    );
  }
}

export default ImageLightbox;
