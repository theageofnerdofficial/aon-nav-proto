/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class DotsMenuButton extends Component {
  render() {
    return (
      <span style={{ position: 'absolute', right: 0, top: '0' }}>
        <button
          className="btn btn-sm text-muted"
          style={{ marginTop: '-15px', opacity: 0.8 }}
          onClick={() => {
            const panel = document.getElementById(`panel-${this.props.id}`);
            panel.style.display =
              panel.style.display === 'none' ? 'block' : 'none';
          }}
        >
          {this.props.FontIcon('faEllipsisV')}
        </button>
      </span>
    );
  }
}

export default DotsMenuButton;
