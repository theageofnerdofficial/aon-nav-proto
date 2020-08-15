import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';

class FilterBtn extends Component {
  render() {
    return (
      <span
        className="badge p-1 m-0"
        style={{
          background: this.props.brandColor,
          fontWeight: 300,
          transform: 'scale(0.85)',
        }}
      >
        <button className="btn m-0 p-0 text-light">
          {FontIcon('faTimes')}
        </button>
        &nbsp;
        <span className="btn font-weight-light m-0 p-0 text-light">
          {this.props.source}
        </span>
      </span>
    );
  }
}

export default FilterBtn;
