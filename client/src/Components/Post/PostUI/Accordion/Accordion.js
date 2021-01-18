/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import AccordionImages from './AccordionImages';
import AccordionMetaText from './AccordionMetaText';
import AccordionPanelHead from './AccordionPanelHead';
import FontIcon from '../../../FontIcon/FontIcon';
import utils from '../../../Utils/utils/utils';
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

    //
    const {
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
        <AccordionPanelHead labels={labels} id={id} settings={settings} />
        <div id={`collapse${id}`} className="collapse in panel-collapse">
          <div
            className="float-left font-italic font-weight-light panel-body pt-1"
            style={{ width: '100%' }}
          >
            <AccordionImages
              data={{
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
            <br />
            <AccordionMetaText
              data={{ permalink, source, source_data, upvote_ratio }}
              labels={labels}
              FontIcon={FontIcon}
              settings={settings}
              utils={utils}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
