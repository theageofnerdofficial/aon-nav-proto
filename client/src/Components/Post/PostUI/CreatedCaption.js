/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class CreatedCaption extends Component {
  render() {
    let { createdTimeFrom, labels, settings } = this.props;

    // :
    const abbreviateTime = (time) => {
      return time
        .toString()
        .replace(' hours', labels.ui.sources.time.abbreviations.hours);
    };
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
        {settings.ui.time.abbreviateUnits
          ? abbreviateTime(createdTimeFrom)
          : createdTimeFrom}
      </div>
    );
  }
}

export default CreatedCaption;
