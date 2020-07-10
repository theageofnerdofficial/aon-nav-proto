import React, { Component } from 'react';
import FontIcon from '../../../FontIcon/FontIcon';

class HeroLinksSocial extends Component {
  render() {
    return (
      <div className="hero-links-wrapper hero-links-social-wrapper">
        <button className="btn btn-nav-link btn-sm form-control text-left">
          {FontIcon('faFacebook')} Facebook
        </button>
        <button className="btn btn-nav-link btn-sm form-control text-left">
          {FontIcon('faTwitter')} Twitter
        </button>
        <button className="btn btn-nav-link btn-sm form-control text-left">
          {FontIcon('faInstagramSquare')} Instagram
        </button>
      </div>
    );
  }
}

export default HeroLinksSocial;
