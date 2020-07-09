import React, { Component } from 'react';

class HeroLinksSocial extends Component {
  render() {
    return (
      <div
        className="x2"
        style={{
          width: '100px',
          height: '110px',
          right: '0',
          position: 'absolute',
        }}
      >
        <button className="btn btn-nav-link btn-sm form-control">
          Facebook
        </button>
        <button className="btn btn-nav-link btn-sm form-control">
          Twitter
        </button>
        <button className="btn btn-nav-link btn-sm form-control">
          Instagram
        </button>
      </div>
    );
  }
}

export default HeroLinksSocial;
