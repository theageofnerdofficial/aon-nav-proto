import React, { Component } from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
      navItems: ['Home', 'My Nerd', 'TV/Film', 'Comics', 'Gaming', '+'],
    };
    this.setActiveItem = this.setActiveItem.bind(this);
  }
  setActiveItem(e) {
    this.setState({ activeItem: e.target.name });
  }
  render() {
    return (
      <header>
        <div className="bg-custom-2 header-sub-wrapper">
          <Hero
            lightsOff={this.props.lightsOff}
            Link={this.props.Link}
            toggleLights={this.props.toggleLights}
          />
          <Navbar
            activeItem={this.state.activeItem}
            Link={this.props.Link}
            navItems={this.state.navItems}
            setActiveItem={this.setActiveItem}
          />
        </div>
      </header>
    );
  }
}

export default Header;
