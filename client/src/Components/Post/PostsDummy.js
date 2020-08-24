/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';

class PostsDummy extends Component {
  render() {
    const getPost = () => {
      return (
        <div className="col-12 p-0 py-3 m-0 row shadow-sm">
          <div className="col-1 p-0 m-0 text-center">
            <img
              className="rounded ml-1 post-thumbnail"
              src="img/thumbnails/gaming-nintendo.svg"
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-10 font-weight-light" style={{ lineHeight: 1.2 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae, ullam vel maxime possimus ab corporis explicabo,
            quaerat placeat quia laudantium quam a iure sit.
            <br />
          </div>
          <div className="col-1 p-0 m-0">
            <div style={{ height: '50%' }}>
              <button className="btn btn-light btn-sm form-control text-muted">
                {FontIcon('faEllipsisV')}
              </button>
            </div>
            <div className="vertical-bottom" style={{ height: '50%' }}>
              <button className="btn btn-light btn-sm form-control vertical-bottom text-muted">
                {FontIcon('faChevronDown')}
              </button>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div>
        <div
          className="bg-light shadow-sm rounded col-12 p-0 m-0 mb-4 row"
          style={{ height: '300px', overflow: 'scroll', paddingBottom: 5 }}
        >
          {Array(30)
            .fill()
            .map(() => getPost())}
        </div>
      </div>
    );
  }
}

export default PostsDummy;
