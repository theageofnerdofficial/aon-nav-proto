import React, { Component } from 'react';
import loginCreds from '../../config/loginCreds';
import utils from '../Utils/utils/utils';

class CarouselLoggedIn extends Component {
  render() {
    return (
      <React.Fragment>
        <h4
          className={`font-weight-light p-0 pt-4 text-left text-dark`}
          style={{
            fontSize: '1.35rem',
            letterSpacing: '-1px',
            textShadow: '1px 1px 1px #fff',
          }}
        >
          Welcome back,{' '}
          {utils.str.makeTitleCase(loginCreds.storageItem.getUsername())}!
        </h4>
      </React.Fragment>
    );
  }
}

export default CarouselLoggedIn;
