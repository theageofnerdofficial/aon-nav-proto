import React, { Component } from 'react';
import '../Header.css';

class HeroLogo extends Component {
  render() {
    return (
      <div className=" navbar-logo-wrapper text-dark vertical-center">
        <img src="img/aonlogo5.svg" width="125px" />
        {/*<h1 className="p-0 m-0">LOGO HERE</h1>*/}
      </div>
    );
  }
}

export default HeroLogo;
