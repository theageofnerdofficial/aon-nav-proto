/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class PostsDummy extends Component {
  render() {
    const getPost = () => {
      return (
        <React.Fragment>
          <div className="col-2">
            <img
              className="rounded"
              src="img/thumbnails/gaming-nintendo.svg"
              style={{ width: '50px' }}
            />
          </div>
          <div className="col-10 font-weight-light" style={{ lineHeight: 1.2 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae, ullam vel maxime possimus ab corporis explicabo,
            quaerat placeat quia laudantium quam a iure sit.
            <br />
            <div style={{ float: 'right' }}>
              <button className="btn btn-light btn-sm">+</button>{' '}
              <button className="btn btn-light btn-sm">+</button>{' '}
            </div>
          </div>
        </React.Fragment>
      );
    };
    return (
      <div>
        <div
          className="bg-light shadow-sm rounded col-12 p-0 m-0 mb-4 row"
          style={{ height: '300px', overflow: 'scroll' }}
        >
          {getPost()}
          {getPost()}
          {getPost()}
        </div>
      </div>
    );
  }
}

export default PostsDummy;
