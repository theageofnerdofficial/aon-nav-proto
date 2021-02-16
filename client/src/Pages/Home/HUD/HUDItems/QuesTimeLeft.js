// Imports:
import React, { Component } from 'react';

class QuesTimeLeft extends Component {
  render() {
    const { settings } = this.props;
    return (
      <div
        className={`col-6 ${settings.debug.guidelines ? 'guidelines' : null}`}
      >
        10% Complete
      </div>
    );
  }
}

export default QuesTimeLeft;
