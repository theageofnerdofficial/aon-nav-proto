import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';

class ModifyBtn extends Component {
  render() {
    return (
      <button
        className={`form-control btn-light text-${this.props.color} font-weight-light btn btn-sm  form-control p-0 rounded-0 text-center  text-uppercase`}
      >
        {FontIcon(this.props.fontIcon)}&nbsp;{this.props.label}
      </button>
    );
  }
}

export default ModifyBtn;
