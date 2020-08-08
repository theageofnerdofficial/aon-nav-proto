import React, { Component } from 'react';

class SubredditEdit extends Component {
  render() {
    return (
      <div className="col-12 row p-0 m-0 my-3">
        <div className="col-2 p-0">
          <button
            className="btn btn-light form-control font-weight-light"
            style={{
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            /r/
          </button>
        </div>
        <div className="col-10 p-0">
          <input
            className="form-control font-weight-light"
            defaultValue={
              this.props.sourceReducer.sourceById
                ? this.props.sourceReducer.sourceById.subreddit
                : ''
            }
            disabled
            name="subreddit"
            placeholder={`e.g. ${this.props.getPlaceholder(
              this.props.sourceReducer
            )}`}
            readOnly
            required
            style={{
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              opacity: 0.4,
            }}
          />
        </div>
      </div>
    );
  }
}

export default SubredditEdit;
