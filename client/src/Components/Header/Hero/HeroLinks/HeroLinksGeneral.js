import React, { Component } from 'react';
import '../../Header.css';
import FontIcon from '../../../FontIcon/FontIcon';

class HeroLinksGeneral extends Component {
  render() {
    return (
      <div className="hero-links-wrapper hero-links-general-wrapper">
        <button className="btn btn-nav-link btn-sm form-control text-left">
          {FontIcon('faCog')} Settings
        </button>
        <button className="btn btn-nav-link btn-sm form-control text-right"></button>
        <button className="btn btn-nav-link btn-sm form-control text-right"></button>
      </div>
    );
  }
}

export default HeroLinksGeneral;
