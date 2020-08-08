import React, { Component } from 'react';

class NumberOfPostsEdit extends Component {
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
            Posts
          </button>
        </div>
        <div className="col-10 p-0">
          <input
            className="form-control font-weight-light"
            defaultValue={
              this.props.sourceById ? this.props.sourceById.postsNumber : 10
            }
            max="100"
            min="1"
            name="posts"
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

export default NumberOfPostsEdit;
