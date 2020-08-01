import React, { Component } from 'react';

class SelectTweetQuery extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <p className="font-weight-light font-italic">
          OPTIONAL: this is a query for refining Tweets by keyword & date. "q:
          'banana since:2011-07-11'":
        </p>
        <div className="col-12 row p-0 m-0 my-3">
          <div className="col-2 p-0">
            <button
              className="btn btn-light form-control font-weight-light"
              style={{
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
              }}
            >
              Q
            </button>
          </div>
          <div className="col-4 p-0">
            <input
              className="form-control font-weight-light"
              name="subreddit"
              placeholder="Keyword"
              style={{
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
              }}
            />
          </div>
          <div className="col-6 p-0">
            <input
              type="date"
              className="form-control font-weight-light"
              name="subreddit"
              placeholder="Keyword"
              style={{
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
              }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectTweetQuery;
