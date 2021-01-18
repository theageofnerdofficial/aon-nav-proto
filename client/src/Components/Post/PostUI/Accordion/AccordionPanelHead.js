/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class AccordionPanelHead extends Component {
  render() {
    const { id, labels } = this.props;
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
  }
}

export default AccordionPanelHead;
