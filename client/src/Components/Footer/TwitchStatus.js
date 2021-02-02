import React, { Component } from 'react';

class TwitchStatus extends Component {
  render() {
    return (
      <div className="bg-white m-0 p-0 col-6 text-muted">
        <span className="pl-2 text-secondary">
          {this.props.FontIcon('faCircle')}
        </span>
        &nbsp;AON Twitch: offline
      </div>
    );
  }
}

export default TwitchStatus;
