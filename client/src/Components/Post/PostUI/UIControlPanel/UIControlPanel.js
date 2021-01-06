/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class UIControlPanel extends Component {
  render() {
    const { FontIcon } = this.props;
    return (
      <div className="col-5 offset-3 m-0 p-0 row" style={{ height: '35px' }}>
        {[
          { icon: 'faExternalLinkAlt' },
          { icon: 'faRetweet' },
          { icon: 'faHeart' },
          { icon: 'faArrowUp' },
        ].map((btn) => {
          return (
            <div className="col-3 m-0 p-0 text-center">
              <button
                className="btn btn-sm bg-light text-muted"
                style={{ width: '100%' }}
              >
                {FontIcon(btn.icon)}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UIControlPanel;
