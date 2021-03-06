import React, { Component } from 'react';
import HeroLogo from './HeroLogo';
import HeroLinksGeneral from './HeroLinks/HeroLinksGeneral';
import HeroLinksSocial from './HeroLinks/HeroLinksSocial';
import HeroBg from './HeroBg';

class Hero extends Component {
  render() {
    return (
      <div
        style={{
          height: 120,
          width: '100%',
        }}
      >
        <HeroLogo />
        <HeroLinksGeneral
          lightsOff={this.props.lightsOff}
          Link={this.props.Link}
          toggleLights={this.props.toggleLights}
        />
        <HeroLinksSocial />

        <HeroBg />
      </div>
    );
  }
}

export default Hero;
