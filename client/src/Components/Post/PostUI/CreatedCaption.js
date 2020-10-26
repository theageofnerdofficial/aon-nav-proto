/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class CreatedCaption extends Component {
  render() {
    return (
      <div
        className="font-italic pt-2 px-2 text-muted"
        style={{
          fontSize: '0.9rem',
          fontWeight: 300,
          lineHeight: '0.9rem',
          opacity: 0.6,
        }}
      >
        ~2 hours ago
      </div>
    );
  }
}

export default CreatedCaption;
