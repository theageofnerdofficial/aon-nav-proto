import React, { Component } from 'react';

class LabelBtn extends Component {
  render() {
    return (
      <span
        className="badge p-1 m-0"
        style={{
          background: this.props.brandColor,
          fontWeight: 300,
          width: this.props.stretch ? '100%' : null,
        }}
      >
        <span className="font-weight-light m-0 p-0 text-light">
          {this.props.source}
        </span>
      </span>
    );
  }
}

export default LabelBtn;
