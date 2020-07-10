import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';

class ModernGames extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.gaming.modern}
          title="Modern Gaming"
        />
        <p>Breath of the Wild 2 will be quite the barn burner!</p>
      </div>
    );
  }
}

export default ModernGames;
