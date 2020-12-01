import React, { Component } from 'react';
import FontIcon from '../../../FontIcon/FontIcon';

class HeroLinksSocial extends Component {
  render() {
    return (
      <div className="hero-links-wrapper hero-links-social-wrapper">
        <button className="btn nav-btn-link btn-sm form-control text-left">
          <span className="nav-btn-link-facebook-ico">
            {FontIcon('faFacebook')}
          </span>
          &nbsp;
          <span className="nav-btn-link-facebook-txt">Facebook</span>
        </button>
        <button className="btn nav-btn-link btn-sm form-control text-left">
          <span className="nav-btn-link-twitter-ico">
            {FontIcon('faTwitter')}
          </span>
          &nbsp;
          <span className="nav-btn-link-facebook-txt">Twitter</span>
        </button>
        <button className="btn nav-btn-link btn-sm form-control text-left">
          <span className="nav-btn-link-insta-ico">
            {FontIcon('faInstagramSquare')}
          </span>
          &nbsp;
          <span className="nav-btn-link-insta-txt">Instagram</span>
        </button>
      </div>
    );
  }
}

export default HeroLinksSocial;
