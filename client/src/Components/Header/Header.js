import React, { Component } from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };
    this.setActiveItem = this.setActiveItem.bind(this);
  }
  setActiveItem(e) {
    this.setState({ activeItem: e.target.name });
  }
  render() {
    return (
      <header>
        <div className="fixed-top bg-custom-2 header-sub-wrapper">
          <Hero />
          <Navbar
            activeItem={this.state.activeItem}
            setActiveItem={this.setActiveItem}
          />
        </div>
      </header>
    );
  }
}

export default Header;
