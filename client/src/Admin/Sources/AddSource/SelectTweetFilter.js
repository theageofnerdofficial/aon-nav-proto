import React, { Component } from 'react';

class SelectTweetFilter extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <p
          className="font-italic font-weight-light"
          style={{ fontSize: '0.85em' }}
        >
          NOTE: we can only get Tweets from up to 7 days ago using the free
          Twitter API:
        </p>
        <div className="col-12 row p-0 m-0">
          <div className="col-2 p-0">
            <button
              className="btn btn-light form-control font-weight-light"
              style={{
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
              }}
            >
              By
            </button>
          </div>
          <div className="col-10 p-0">
            <select
              className="form-control font-weight-light mb-3"
              name="tweet-filter"
              onChange={(e) => {
                this.props.sourceAddFormFilter(e.target.value);
              }}
            >
              <option value="hot">Mixed</option>
              <option value="new">Recent</option>
              <option value="rising">Popular</option>
            </select>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectTweetFilter;
