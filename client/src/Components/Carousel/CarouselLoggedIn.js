import React, { Component } from 'react';
import labels from '../../config/labels';
import loginCreds from '../../config/loginCreds';
import utils from '../Utils/utils/utils';

class CarouselLoggedIn extends Component {
  render() {
    return (
      <React.Fragment>
        <h4
          className={`font-weight-light p-0 pt-4 text-left text-muted h4-welcome-title`}
        >
          {labels.ui.home.welcomeSignedIn},{' '}
          {utils.str.makeTitleCase(loginCreds.storageItem.getUsername())}!
        </h4>
      </React.Fragment>
    );
  }
}

export default CarouselLoggedIn;
