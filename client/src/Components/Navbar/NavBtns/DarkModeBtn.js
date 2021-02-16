// Imports:
import React, { Component } from 'react';

class DarkModeBtn extends Component {
  render() {
    const { FontIcon, uiReducer, uiToggleLights } = this.props;
    return (
      <a className="dropdown-item" href="#" onClick={() => uiToggleLights()}>
        {FontIcon(uiReducer.lightsOff ? 'faSun' : 'faMoon')}
        &nbsp;
        {uiReducer.lightsOff ? 'Lighten' : 'Darken'}
      </a>
    );
  }
}
export default DarkModeBtn;
