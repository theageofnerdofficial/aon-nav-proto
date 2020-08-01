import React, { Component } from 'react';

class SelectSubredditFilter extends Component {
  render() {
    return (
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
            name="subreddit-filter"
            onChange={(e) => {
              this.props.sourceAddFormFilter(e.target.value);
            }}
          >
            <option value="hot">Hot</option>
            <option value="new">New</option>
            <option value="rising">Rising</option>
            <option value="controversial">Controversial</option>
            <option value="top">Top</option>
            <option value="gilded">Gilded</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectSubredditFilter;
