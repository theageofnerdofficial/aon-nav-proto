/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import FontIcon from '../../FontIcon/FontIcon';

class DotsMenu extends Component {
  render() {
    let { id } = this.props;
    return (
      <div
        className="rounded shadow"
        id={`panel-${id}`}
        style={{
          background: '#FFF',
          display: 'none',
          height: 123,
          padding: 5,
          position: 'absolute',
          right: 10,
          top: 15,
          transform: 'scale(0.92)',
          width: 125,
          zIndex: 100,
        }}
      >
        {[
          { label: 'Save post', icon: 'faSave' },
          { label: 'Hide post', icon: 'faEyeSlash' },
          { label: 'Visit link', icon: 'faExternalLinkAlt' },
        ].map((btn) => {
          return (
            <button className="btn-sm form-control post-newspost-dots-menu-ui-btn">
              <span className="float-left text-muted">
                {FontIcon(btn.icon)}
              </span>
              {btn.label}
            </button>
          );
        })}
      </div>
    );
  }
}

export default DotsMenu;
