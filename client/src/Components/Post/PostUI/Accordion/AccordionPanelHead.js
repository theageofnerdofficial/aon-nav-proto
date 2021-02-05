/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

// note: inject
import {
  SOURCE_REDDIT_LABEL,
  SOURCE_TWITTER_LABEL,
} from '../../../../constants';

class AccordionPanelHead extends Component {
  render() {
    const { data, id, labels } = this.props;

    // :
    const hasEmbeddedMedia = () => {
      switch (data.source) {
        case SOURCE_REDDIT_LABEL:
          if (data.preview_img_arr && data.preview_img_arr.length >= 1) {
            return true;
          }
          break;
        case SOURCE_TWITTER_LABEL:
          if (data.entities_media && data.entities_media.length >= 1) {
            return true;
          }
          break;
        default:
          return false;
      }
      return false;
    };

    // :
    const getAccordionPanelHead = () => {
      return (
        <div className="my-1 panel-heading rounded">
          <a
            data-toggle="collapse"
            data-parent="#accordion"
            href={`#collapse${id}`}
          >
            <button
              className="btn-link text-left font-weight-light form-control panel-title"
              onClick={(e) => {
                e.target.innerHTML =
                  e.target.innerHTML === labels.ui.posts.accordionPanel.expand
                    ? labels.ui.posts.accordionPanel.contract
                    : labels.ui.posts.accordionPanel.expand;
              }}
              style={{ background: 'none', border: '0' }}
            >
              {labels.ui.posts.accordionPanel.expand}
            </button>
          </a>
        </div>
      );
    };
    return hasEmbeddedMedia() ? getAccordionPanelHead() : null;
  }
}

export default AccordionPanelHead;
