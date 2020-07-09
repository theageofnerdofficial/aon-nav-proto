import React, { Component } from 'react';

class NavbarItem extends Component {
  render() {
    return (
      <li
        className={`nav-item ${
          this.props.activeItem === this.props.name ? 'active' : ''
        }`}
      >
        <a
          className="nav-link"
          href={`/#/${this.props.link}`}
          name={this.props.name}
          onClick={() => this.props.setActiveItem(this.props.name)}
        >
          {this.props.label} <span className="sr-only">(current)</span>
        </a>
      </li>
    );
  }
}
export default NavbarItem;
