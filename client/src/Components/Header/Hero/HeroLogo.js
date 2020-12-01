import React, { Component } from 'react';
import '../../../Main.css';

class HeroLogo extends Component {
  render() {
    return (
      <div className="navbar-logo-wrapper pr-4 text-dark vertical-center">
        <img alt="AON Logo" src="/img/logo2.svg" width="165px" />
      </div>
    );
  }
}

export default HeroLogo;
