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
        <HeroLinksGeneral />
        <HeroLinksSocial />

        <HeroBg />
      </div>
    );
  }
}

export default Hero;
