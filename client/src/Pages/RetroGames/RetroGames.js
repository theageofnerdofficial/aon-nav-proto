import React, { Component } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import settings from '../../config/settings';

class RetroGames extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.gaming.retro}
          title="Retro Gaming"
        />
        <p>Rise from yaw gwaveee</p>
      </div>
    );
  }
}

export default RetroGames;
