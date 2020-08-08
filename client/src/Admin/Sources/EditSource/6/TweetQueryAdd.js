import React, { Component } from 'react';

class TweetQueryAdd extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <p
          className="font-italic font-weight-light"
          style={{ fontSize: '0.85em' }}
        >
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
              defaultValue={this.props.sourceReducer.sourceById.queryKeyword}
              name="query-keyword"
              placeholder="Keyword"
              style={{
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
              }}
            />
          </div>
          <div className="col-6 p-0">
            <input
              className="form-control font-weight-light"
              defaultValue={this.props.sourceReducer.sourceById.queryDate}
              name="query-date"
              style={{
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
              }}
              type="date"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TweetQueryAdd;
