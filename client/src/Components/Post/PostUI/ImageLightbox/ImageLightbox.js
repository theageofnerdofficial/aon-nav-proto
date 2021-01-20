/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class ImageLightbox extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        {/* <p>{data ? highResImg.url : null}</p>*/}
        {data && data.imgUrls.length >= 1
          ? data.imgUrls.map((imgSrc) => {
              return (
                <img
                  alt="Some alt tag here"
                  className="img-fluid rounded"
                  src={imgSrc}
                  style={
                    {
                      // height: highResImg.h,
                      // width: highResImg.w,
                    }
                  }
                />
              );
            })
          : null}
      </React.Fragment>
    );
  }
}

export default ImageLightbox;
