import React, { Component } from 'react';
import '../../../../Main.css';
import FontIcon from '../../../FontIcon/FontIcon';

class HeroLinksGeneral extends Component {
  render() {
    return (
      <div className="hero-links-wrapper hero-links-general-wrapper">
        <button className="btn nav-btn-link nav-btn-link-light-toggle-ico btn-sm form-control text-left">
          <span className="nav-btn-link-light-toggle-ico">
            {FontIcon('faCog')}
          </span>
          &nbsp;
          <span className="nav-btn-link-light-toggle-txt">Settings</span>
        </button>
        <button
          className="btn nav-btn-link btn-sm form-control text-left"
          onClick={(e) => this.props.toggleLights()}
        >
          <span className="nav-btn-link-light-toggle-ico">
            {this.props.lightsOff ? FontIcon('faSun') : FontIcon('faMoon')}
          </span>
          &nbsp;
          <span className="nav-btn-link-light-toggle-txt">
            {this.props.lightsOff ? 'Lighten' : 'Darken'}
          </span>
        </button>
        <this.props.Link to={`/admin`}>
          <button className="btn nav-btn-link btn-sm form-control text-left">
            Admin
          </button>
        </this.props.Link>
      </div>
    );
  }
}

export default HeroLinksGeneral;
