/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class AccordionPanelHead extends Component {
  render() {
    const { id, settings } = this.props;
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
                e.target.innerHTML === settings.ui.labels.panel.expand
                  ? settings.ui.labels.panel.contract
                  : settings.ui.labels.panel.expand;
            }}
            style={{ background: 'none', border: '0' }}
          >
            {settings.ui.labels.panel.expand}
          </button>
        </a>
      </div>
    );
  }
}

export default AccordionPanelHead;
