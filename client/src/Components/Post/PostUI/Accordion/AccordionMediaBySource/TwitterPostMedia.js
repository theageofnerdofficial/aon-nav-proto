/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class TwitterPostMedia extends Component {
  componentDidMount() {
    //entities_media,
    console.log(this.props.data.entities_media);
  }
  render() {
    const {
      data,
      MODAL_IMAGE_LIGHTBOX,
      modalReducer,
      modalUpdateMode,
    } = this.props;

    data.imgUrls = [];

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

        return <h1>hi</h1>;

        {
          /* 
        return (
          <AccordionMediaItem
            data={data}
            imgUrl={img}
            imgEmbeddedUrl={img}
            vidUrl={img}
            index={index}
            MODAL_IMAGE_LIGHTBOX={MODAL_IMAGE_LIGHTBOX}
            modalReducer={modalReducer}
            modalUpdateMode={modalUpdateMode}
          />
        );*/
        }
      });
      return;
    };

    const getExtendedEntitiesMedia = () => {
      //
      return;
    };
    return (
      <React.Fragment>
        {data.entities_media && data.entities_media.length >= 1
          ? getEntitiesMedia()
          : null}
        {/* 
        {data && data['preview_img_arr']
          ? data['preview_img_arr'].map((img, index) => {
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
          */}
      </React.Fragment>
    );
  }
}

export default TwitterPostMedia;
