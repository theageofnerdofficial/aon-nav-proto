// Imports:
import React, { Component } from 'react';

class QuesProgress extends Component {
  render() {
    const { settings } = this.props;
    return (
      <div
        className={`col-6 ${settings.debug.guidelines ? 'guidelines' : null}`}
      >
        Q1 of 10
      </div>
    );
  }
}

export default QuesProgress;
