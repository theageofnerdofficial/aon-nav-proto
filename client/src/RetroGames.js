import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';

class RetroGames extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          title="Retro Gaming"
          tabColour={settings.ui.style.sectionTab.gaming.retro}
        />
        <p>Rise from yaw gwaveee</p>
      </div>
    );
  }
}

export default RetroGames;
