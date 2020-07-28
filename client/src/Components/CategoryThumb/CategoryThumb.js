import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';

class CategoryThumb extends Component {
  render() {
    return (
      <div
        className="bg-light rounded text-center vertical-center horizontal-center m-1"
        style={{ height: 120 }}
      >
        <div
          className="font-weight-light"
          style={{ fontSize: '0.9em', height: 70 }}
        >
          <h2 className="p-0">{FontIcon(this.props.fontIcon)}</h2>
          {this.props.label}
        </div>
      </div>
    );
  }
}

export default CategoryThumb;
