/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

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
          height: 120,
          padding: 5,
          position: 'absolute',
          right: 10,
          top: 15,
          transform: 'scale(0.92)',
          width: 150,
          zIndex: 100,
        }}
      >
        <button className="btn-sm form-control post-newspost-dots-menu-ui-btn">
          Save post
        </button>
        <button className="btn-sm form-control post-newspost-dots-menu-ui-btn">
          Hide post
        </button>
        <button className="btn-sm form-control post-newspost-dots-menu-ui-btn">
          Visit link
        </button>
      </div>
    );
  }
}

export default DotsMenu;
