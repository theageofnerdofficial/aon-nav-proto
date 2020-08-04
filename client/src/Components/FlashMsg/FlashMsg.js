import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';

class FlashMsg extends Component {
  render() {
    const getIcon = (style) => {
      if (style === 'danger') {
        return FontIcon('faExclamationTriangle');
      } else if (style === 'success') {
        return FontIcon('faCheckCircle');
      }
    };
    return (
      <div
        className={`alert alert-${
          this.props.flashMsgReducer.style
            ? this.props.flashMsgReducer.style
            : 'primary'
        } border fadeout flash-msg shadow`}
        style={{
          display: this.props.flashMsgReducer.showFlashMsg ? 'block' : 'none',
        }}
        role="alert"
      >
        {getIcon(this.props.flashMsgReducer.style)}&nbsp;
        {this.props.flashMsgReducer.msg ? this.props.flashMsgReducer.msg : '-'}
      </div>
    );
  }
}

export default FlashMsg;
