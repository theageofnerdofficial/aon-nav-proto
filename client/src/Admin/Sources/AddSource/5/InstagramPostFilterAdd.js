import React, { Component } from 'react';

class InstagramPostFilterAdd extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
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
              name="instagram-post-filter"
              onChange={(e) => {
                this.props.sourceAddFormFilter(e.target.value);
              }}
            >
              <option value="mixed">Mixed</option>
              <option value="recent">Recent</option>
              <option value="popular">Popular</option>
            </select>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InstagramPostFilterAdd;
