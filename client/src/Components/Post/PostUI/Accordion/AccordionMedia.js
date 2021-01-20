/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import RedditPostMedia from './AccordionMediaBySource/RedditPostMedia';
import TwitterPostMedia from './AccordionMediaBySource/TwitterPostMedia';
import {
  SOURCE_REDDIT_LABEL,
  SOURCE_TWITTER_LABEL,
} from '../../../../constants';

class AccordionMedia extends Component {
  render() {
    const {
      data,
      MODAL_IMAGE_LIGHTBOX,
      modalReducer,
      modalUpdateMode,
    } = this.props;

    // :
    const getMediaBySource = () => {
      switch (data.source) {
        case SOURCE_REDDIT_LABEL:
          return (
            <RedditPostMedia
              data={data}
              MODAL_IMAGE_LIGHTBOX={MODAL_IMAGE_LIGHTBOX}
              modalReducer={modalReducer}
              modalUpdateMode={modalUpdateMode}
            />
          );
        case SOURCE_TWITTER_LABEL:
          return (
            <TwitterPostMedia
              data={data}
              MODAL_IMAGE_LIGHTBOX={MODAL_IMAGE_LIGHTBOX}
              modalReducer={modalReducer}
              modalUpdateMode={modalUpdateMode}
            />
          );

          /*
           entities_media,
              extended_entities_media,
          */
          return 0;
        default:
          return true;
      }
    };

    return <div className="col-12">{getMediaBySource()}</div>;
  }
}

export default AccordionMedia;
