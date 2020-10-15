import React, { Component } from 'react';

class NumberOfYoutubeVidsAdd extends Component {
  render() {
    return (
      <div className="col-12 row p-0 m-0 my-3">
        <div className="col-6 p-0">
          <button
            className="btn btn-light form-control font-weight-light"
            style={{
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            Recent Videos:
          </button>
        </div>
        <div className="col-6 p-0">
          <input
            className="form-control font-weight-light text-center"
            defaultValue="5"
            name="videos"
            style={{
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
            }}
            type="number"
          />
        </div>
      </div>
    );
  }
}

export default NumberOfYoutubeVidsAdd;
