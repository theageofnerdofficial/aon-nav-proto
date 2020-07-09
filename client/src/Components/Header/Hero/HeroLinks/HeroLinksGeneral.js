import React, { Component } from 'react';
import '../../Header.css';

class HeroLinksGeneral extends Component {
  render() {
    return (
      <div
        className="x2"
        style={{
          width: '100px',
          height: '110px',
          left: '0 !important',
          position: 'absolute',
        }}
      >
        <button className="btn btn-sm form-control">Settings</button>
        <button className="btn btn-sm form-control">-</button>
        <button className="btn btn-sm form-control">-</button>
      </div>
    );
  }
}

export default HeroLinksGeneral;
