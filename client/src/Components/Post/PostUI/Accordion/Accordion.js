/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import AccordionMedia from './AccordionMedia';
import AccordionPanelHead from './AccordionPanelHead';
import { MODAL_IMAGE_LIGHTBOX } from '../../../../constants';

class Accordion extends Component {
  render() {
    const {
      labels,
      modalReducer,
      modalUpdateMode,
      postElem,
      settings,
    } = this.props;

    // :
    const {
      entities_media,
      extended_entities_media,
      id,
      permalink,
      preview_img_arr,
      source,
      source_data,
      text,
      upvote_ratio,
    } = this.props.data;
    return (
      <div className="panel panel-default mt-2">
        <AccordionPanelHead
          data={{
            entities_media,
            extended_entities_media,
            preview_img_arr,
            permalink,
            source,
            source_data,
            text,
            upvote_ratio,
          }}
          labels={labels}
          id={id}
          settings={settings}
        />
        <div id={`collapse${id}`} className="collapse in panel-collapse">
          <div
            className="float-left font-italic font-weight-light panel-body pt-1"
            style={{ width: '100%' }}
          >
            <AccordionMedia
              data={{
                entities_media,
                extended_entities_media,
                preview_img_arr,
                permalink,
                source,
                source_data,
                text,
                upvote_ratio,
              }}
              MODAL_IMAGE_LIGHTBOX={MODAL_IMAGE_LIGHTBOX}
              modalReducer={modalReducer}
              modalUpdateMode={modalUpdateMode}
              postElem={postElem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
