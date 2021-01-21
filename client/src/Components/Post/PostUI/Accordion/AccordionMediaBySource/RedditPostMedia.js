/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import AccordionMediaItem from '../AccordionMediaItem';
import settings from '../../../../../config/settings';

class RedditPostMedia extends Component {
  render() {
    const {
      data,
      MODAL_IMAGE_LIGHTBOX,
      modalReducer,
      modalUpdateMode,
    } = this.props;

    // :
    const formatImgUrl = () => {
      const { preview_img_arr } = data;
      const imgResArr = preview_img_arr[0].resolutions;
      const res = settings.ui.modal.embeddedMedia.reddit.img.resolution;
      return imgResArr[res]
        ? imgResArr[res].url.replaceAll(/&amp;/gi, '&')
        : imgResArr[imgResArr.length - 1].url.replaceAll(/&amp;/gi, '&');
    };

    // :
    data.imgUrls = [];

    return (
      <React.Fragment>
        {data && data['preview_img_arr']
          ? data['preview_img_arr'].map((img, index) => {
              data.imgUrls.push(formatImgUrl(img));
              return (
                <AccordionMediaItem
                  data={data}
                  img={img}
                  index={index}
                  MODAL_IMAGE_LIGHTBOX={MODAL_IMAGE_LIGHTBOX}
                  modalReducer={modalReducer}
                  modalUpdateMode={modalUpdateMode}
                />
              );
            })
          : null}
      </React.Fragment>
    );
  }
}

export default RedditPostMedia;
