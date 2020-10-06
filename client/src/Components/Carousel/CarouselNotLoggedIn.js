import React, { Component } from 'react';
import utils from '../Utils/utils/utils';

class CarouselNotLoggedIn extends Component {
  render() {
    return this.props.items.map((item, index) => {
      return (
        <div className={`carousel-item ${index === 0 ? 'active' : null}`}>
          <div
            //carousel-gradient-overlay
            className="bg-white m-0 p-0 vertical-center"
            style={{
              height: '100%',
              position: 'absolute',
              width: '100%',
              zIndex: 1,
            }}
          >
            <div
              className={`font-weight-light text-${item.align}`}
              style={{ width: '75%' }}
            >
              <h1
                className={`font-weight-light m-0 text-${item.align} text-dark`}
                style={{
                  letterSpacing: '-1px',
                  textShadow: '1px 1px 1px #fff',
                }}
              >
                {item.title}
              </h1>
              <p className={`font-italic text-${item.align} text-dark`}>
                {utils.str.makeTitleCase(item.mediaSubtype)}
              </p>
              <button className="btn btn-sm btn-secondary mb-1">Sign Up</button>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default CarouselNotLoggedIn;
