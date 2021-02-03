import React, { Component } from 'react';

class TwitchStatus extends Component {
  render() {
    const {FontIcon} = this.props;
    return (
      <div className="bg-white m-0 p-0 col-6 text-muted">
        <span className="pl-2 text-secondary">
          {FontIcon('faCircle')}
        </span>
        &nbsp;AON Twitch: offline
      </div>
    );
  }
}

export default TwitchStatus;
