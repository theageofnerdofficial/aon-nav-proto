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
        <button
          className="btn btn-nav-link btn-sm form-control text-left"
          onClick={(e) => this.props.toggleLights()}
        >
          {this.props.lightsOff ? FontIcon('faSun') : FontIcon('faMoon')}
          &nbsp;
          {this.props.lightsOff ? 'Lighten' : 'Darken'}
        </button>

        <this.props.Link to={`/admin`}>
          <button className="btn btn-nav-link btn-sm form-control text-left">
            Admin
          </button>
        </this.props.Link>
      </div>
    );
  }
}

export default HeroLinksGeneral;
