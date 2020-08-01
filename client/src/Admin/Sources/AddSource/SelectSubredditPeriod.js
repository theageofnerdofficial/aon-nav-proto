import React, { Component } from 'react';

class SelectSubredditPeriod extends Component {
  render() {
    return (
      <div className="col-12 row p-0 m-0 mb-3">
        <div className="col-2 p-0">
          <button
            className="btn btn-light form-control font-weight-light"
            style={{
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            From
          </button>
        </div>
        <div className="col-10 p-0">
          <select
            className="form-control font-weight-light"
            name="subreddit-period"
          >
            <option>Past hour</option>
            <option>Past 24 hours</option>
            <option>Past week</option>
            <option>Past month</option>
            <option>Past year</option>
            <option>All time</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectSubredditPeriod;
